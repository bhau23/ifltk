import os, re, glob
from bs4 import BeautifulSoup, Comment

order = [
    'eQOURSE_Premium_Landing_Page.html',
    'eQOURSE_Category_Selector.html',
] + [f'Academic_Slide_{i}_of_9.html' for i in range(1, 10)] + [f'Business_Slide_{i}_of_7.html' for i in range(1, 8)]

slides_html = ''
collected_styles = set()

for idx, filename in enumerate(order):
    path = os.path.join('stitch_screens', filename)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')
            
            # Extract styles
            for style in soup.find_all('style'):
                collected_styles.add(style.string or '')
                style.extract()
                
            # Remove all comments so they don't render as raw text!
            for comment in soup.find_all(string=lambda text: isinstance(text, Comment)):
                comment.extract()
            
            body = soup.find('body')
            if body:
                # Remove scripts
                for script in body.find_all('script'):
                    script.extract()
                
                body_classes = body.get('class', [])
                body_class_str = ' '.join(body_classes) if isinstance(body_classes, list) else body_classes
                
                # Prevent Tailwind conflicting absolute/relative classes since style.css handles slide positioning
                body_class_str = body_class_str.replace('relative', '')
                
                slide_id = f'slide-{idx}'
                inner_html = ''.join(str(c) for c in body.contents)
                
                slides_html += f'<div id="{slide_id}" class="slide {body_class_str}" data-name="{filename}">\n{inner_html}\n</div>\n'
    else:
        print(f'Missing {filename}')

# Combine all unique styles
all_custom_styles = '\n'.join(collected_styles)

# Use the exact tailwind config from the first file (Landing Page)
tailwind_script = ''
with open(os.path.join('stitch_screens', 'eQOURSE_Premium_Landing_Page.html'), 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')
    tw = soup.find('script', id='tailwind-config')
    if tw:
        tailwind_script = str(tw)

index_template = f'''<!DOCTYPE html>
<html class="light" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>eQOURSE Presentation</title>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    {tailwind_script}
    <link rel="stylesheet" href="./style.css">
    <style>
        {all_custom_styles}
    </style>
</head>
<body class="overflow-hidden w-screen h-screen m-0 p-0 text-gray-900 bg-white">
    <div id="app" class="relative w-full h-full bg-white">
        {slides_html}
    </div>
    <script type="module" src="./main.js"></script>
</body>
</html>
'''

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_template)

print('Built index.html successfully.')
