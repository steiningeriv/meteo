# Meteorology 3 Website
*Redesigned by Arianna Scheidell and Charlie Steininger as a capstone project for IST 440*

Welcome to the README file. This file has all of the information about the files for the updated website.
For convenience and ease of use, this guide is separated by folder in the directory.
For more detailed information, see the Meteo 3 user guide.

## HTML, CSS, and JavaScript
[HTML] (Hypertext Markup Language) is a markup language. It is used to create the "skeleton" of a webpage - that is, lay out the rough contents of the page and link to CSS for formatting and JavaScript for dynamic behavior.

[CSS] (Cascading Style Sheets) enables the separation of style elements from an HTML file. CSS is used to
format the webpage - going off of the metaphor above, CSS is the "skin".

[JavaScript] is a scripting language used to define dynamic webpage behavior. It allows websites to request
information from other sources ([APIs]), generate page elements, or set dynamic elements such as the date.

## meteo directory
This is the main directory, containing all HTML and CSS files and folders containing images and scripts.

### contest.html
This is the weather forecasting contest page.

### index.html
This is the main "homepage".

### resources.html
This page contains Modules (including labs and lessons), Helpful Links, and Web Lecture Outlines.

### syllabus.html
This page contains an HTML-ified version of the course syllabus. It also links to the downloadable Word version of the syllabus.

### pages.css and styles.css
These files contain the style information for the website.

## images directory
This directory holds all of the images (including icons) used in the website.

## scripts directory
This directory holds all of the scripts (including JavaScript and one Python file).

### announcement.py
This file enables the generation of announcement HTML, which can be inserted in the announcements card in index.html. See the Guide for more information.

### api.min.js
This file loads weather information from the [WeatherSTEM API](https://leon.weatherstem.com/api_docs).

### index.js
This file loads weather information (current weather conditions - text and icon) from the [OpenWeatherMap API](https://openweathermap.org/api). It is only used on the index.html page as it loads both the top icon and the icon and date in the weather widget.

### weather.js
This file loads weather information (current weather conditions - text and icon) from the [OpenWeatherMap API](https://openweathermap.org/api). It is used in all files besides index.html.

[HTML]: https://en.wikipedia.org/wiki/HTML
[CSS]: https://en.wikipedia.org/wiki/Cascading_Style_Sheets
[JavaScript]: https://en.wikipedia.org/wiki/JavaScript
[APIs]: https://en.wikipedia.org/wiki/Application_programming_interface
