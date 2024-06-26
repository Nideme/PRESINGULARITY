document.addEventListener('DOMContentLoaded', function() {
     // Animate the brand 
/*
     
  
     setTimeout(function() {
        var brandName = document.querySelector('.brand-name');
        
         brandName.style.opacity = 1;
      }, 1500); // Text appears after 1,2 seconds

     setTimeout(function() {
        
         var brandOwner = document.querySelector('.brand-owner');

        brandOwner.style.opacity = 1;
     }, 2000); // Text appears after 2 seconds  


   // Hide the video and text, show the main content after 4 seconds
   setTimeout(function() {
    
     var brandName = document.querySelector('.brand-name');
     var brandOwner = document.querySelector('.brand-owner');

   
    
     brandOwner.classList.add('small-text');
     brandName.classList.add('small-text');
 
    

    console.log('Video and text hidden, main content should be visible.');
}, 3500); 
   

   setTimeout(function() {

    var mainContent = document.getElementById('main-content'); 
    
    mainContent.style.display = 'block';
    
    

    console.log('Video and text hidden, main content should be visible.');
}, 1000);
    // Hide the video and text, show the main content after 4 seconds
    setTimeout(function() {
        var reapear = document.querySelector('.sticky-header');
      
 
         reapear.style.opacity = 1;
    
      
        console.log('Video and text hidden, main content should be visible.');
    }, 700);

    setTimeout(function() {
        var reapear = document.querySelector('.sticky-header');
      
 
         reapear.classList.add('black');
    
      
        console.log('Video and text hidden, main content should be visible.');
    }, 2000);

});


*/

function toggleSubmenu() {
  // Zugriff auf das Submenu-Element
  var submenu = document.querySelector('.submenu');

  // Prüfen, ob das Submenu angezeigt wird und die Sichtbarkeit umschalten
  if (submenu.style.display === 'none') {
    submenu.style.display = 'block';
  } else {
    submenu.style.display = 'none';
  }
}


/*
    setTimeout(function() {
        var marginadd = document.getElementById('myVideo');
      

       
         marginadd.style.marginTop = '-70%';
    
      
        

        console.log('Video and text hidden, main content should be visible.');
    }, 4000);



    document.addEventListener('DOMContentLoaded', (event) => {
        const menuHtml = `
            <nav class="main-menu">
                <ul>
                    <li><a href="http://statesofme.com">GPT-LIST</a></li>
                    <li><a href="http://gpts.yourdomain.com">GPTs</a></li>
                    <li><a href="http://ai.yourdomain.com">AI</a></li>
                    <li><a href="http://trade.yourdomain.com">TЯade</a></li>
                </ul>
            </nav>
        `;
        document.body.insertAdjacentHTML('afterbegin', menuHtml);
    });
    */

// Placeholder function to fetch an image URL

// Function to fetch og:image URL
function fetchOgImage(url, elementSelector) {
    // Replace `YOUR_PROXY_ENDPOINT` with the URL of your server-side proxy
    const proxyUrl = 'YOUR_PROXY_ENDPOINT?url=' + encodeURIComponent(url);

    fetch(proxyUrl)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const ogImage = doc.querySelector('meta[property="og:image"]');
            if (ogImage && ogImage.content) {
                const imgElement = document.querySelector(elementSelector + ' img');
                if (imgElement) {
                    imgElement.src = ogImage.content;
                    imgElement.alt = 'BioHacker logo'; // Custom alt text
                    // Additional img attributes for performance
                    imgElement.setAttribute('loading', 'lazy');
                    imgElement.setAttribute('width', '100%');
                    imgElement.setAttribute('height', '100%');
                    imgElement.setAttribute('decoding', 'async');
                    imgElement.style.color = 'transparent'; // Customize as needed
                }
            }
        })
        .catch(error => console.error('Error fetching og:image:', error));
}




