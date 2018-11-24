from bs4 import BeautifulSoup as Soup
"""
This python file is a helper to generate an html file for announcements.
The announcements will be written to a file called announcements.html, included
in the main directory, which will then be included in index.html upon page load.

This file must be run manually when new announcements are posted.
"""

def generate_announcement(title, announcement, link):
    html = '<div class="spacer">\n'
    html += '  <a href="' + link + '">\n'
    html += '    <div class="announcement">\n'
    html += '      <h3 class="announcement-title">' + title + '</h3>\n'
    html += '      <h4 class="announcement-details">' + announcement + '</h4>\n'
    html += '    </div>\n'
    html += '  </a>\n'
    html += '</div>\n\n'
    return html


print("Welcome to the Announcement Generator Helper Tool.")
print("This tool will generate an announcement.html page that will be loaded by index.html")
print('For more information, run python help("announcement.py")')
title = input("Enter the title of the announcement: ")
announcement = input("Enter the text of the announcement: ")
print("If you would like the annoucement to link to a file, enter the file name with full path information.")
print("If not, press enter.")
link = input("")

announcement_html = generate_announcement(title, announcement, link)
print("The following html announcement was generated: ")
print(announcement_html)

f = open("announcement.html", "a")
f.write(announcement_html)

#See below the ruins of my attempts to automatically add the announcement html to the index.html file.
#f = open("index.html", 'r')
#soup = Soup(f.read(), 'html.parser')
#div = soup.find(id="announcements card")
#div.insert_after(announcement_html)
#print(soup.prettify()
