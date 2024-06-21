from bs4 import BeautifulSoup
import requests
import os

print(os.getcwd())

# Load gpts.html content
with open('gpts.html', 'r') as file:
    html_content = BeautifulSoup(file.read(), 'html.parser')

# Preserving head, header, and footer from the original HTML
head_content = str(html_content.find('head'))
header_content = str(html_content.find('header'))
footer_content = str(html_content.find('footer'))

# Prepare the main content for gpts2.html, initiating with <main> tag
main_content_new = "<main>\n"

# Find all category divs in the original main section
category_divs = html_content.find_all('div', {'class': 'category-head'})

# Iterate through each category
for category_div in category_divs:
    category_name = category_div.get_text(strip=True).replace(" /", "")
    links_div = category_div.find_next_sibling('div', {'class': 'links'})
    main_content_new += f'<div id="{category_name}">\n<div class="category-head">{category_name}</div>\n<div class="project">\n'
    
    # Process each link within the category
    bogen2_count = 0
    for link in links_div.find_all('a'):
        link_url = link['href']
        # Fetch and parse each link's content for og tags
        try:
            response = requests.get(link_url, timeout=5)
            link_soup = BeautifulSoup(response.content, 'html.parser')
            og_image = link_soup.find('meta', property='og:image')['content'] if link_soup.find('meta', property='og:image') else "#"
            og_title = link_soup.find('meta', property='og:title')['content'] if link_soup.find('meta', property='og:title') else "Title Placeholder"
            og_description = link_soup.find('meta', property='og:description')['content'] if link_soup.find('meta', property='og:description') else "Description Placeholder"
        except Exception as e:
            print(f"Error fetching or parsing {link_url}: {e}")
            og_image, og_title, og_description = "#", "Title Placeholder", "Description Placeholder"
        
        if bogen2_count == 3:  # New .project div after every 3 .bogen2 divs
            main_content_new += '</div>\n<div class="project">\n'
            bogen2_count = 0
        
        main_content_new += f'<div class="bogen2" onclick="location.href=\'{link_url}\';">\n'
        main_content_new += f'<img alt=name, loading="lazy", width="100%", height="100%", decoding="async", data_nimg="1", alt="{og_title}" src="{og_image}" />\n<h2>{og_title}</h2>\n<p>{og_description}</p>\n</div>\n'
        bogen2_count += 1

    # Close the current category div
    main_content_new += '</div>\n</div>\n'

# Close the main tag
main_content_new += "</main>\n"

# Assemble the full HTML for gpts2.html
full_html = f'<!DOCTYPE html>\n<html lang="en">\n{head_content}\n<body>\n{header_content}\n{main_content_new}\n{footer_content}\n</body>\n</html>'

# Write the assembled HTML to gpts2.html
with open('gpts2.html', 'w') as gpts2_file:
    gpts2_file.write(full_html)
