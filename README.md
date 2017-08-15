# dralexgreaney
This is a freelance project to create a website for a computational materials science group at UC Riverside.  The site is currently a work-in-progress; when finished I'll include the link to the site.
 
Since I was working with a computational group I could take great liberty in knowing the content I needed to collect could be directly entered into json format by my client and his group members.  As a result I chose to create a static-ish site hosted from [Amazon's Simple Storage System (S3)](https://aws.amazon.com/s3/),  without a content management system or a database.  Any 'traditional' server needs would be handled through the myriad of Amazon Web Services (AWS).  These simplifications made this a very fun project, in which I could stretch my knowledge into new technical spaces, including AWS, node scripting, build processes, customer communication, design concepts, and UI features.

 # Goals
 'Goals' are loosely defined as client objectives for the site, technical objectives I had for the site, or goals in my personal technical learning.
 * Create an awesome, professional site appropriately suited for a computational design group starting with a pre-designed template (using it to learn about UI features and design)
 * Use the single page template to create the following sectional content
    * above-the-fold landing section that shows off computational images
    * reseach: display image 'teasers' that reveals detailed project descriptions on click
     * group-members: display photos of group member and expand on click or hover to reveal more detail
     * publications: show featured publications in correct format (journal, book, conference proceeding) and a click-more section
     * about, teaching, and outreach: sections with basic static display of text, images, and extennal links
     * contact: contact form that uses AWS API gateway, lambda functions, and email services to receive ajax request and forward the ajax payload to an email 
     * news feed: an updateable section with revolving content, built using AWS API gateway and the simple json storage offered within gateway services
 * Create a server-less website by using AWS API gateway with microservices
 * Set up lamba functions for processing contact form and a news feed
 * Use only npm and node scripts for the build process
 * Understand how to manage an image heavy site
     * use [ImageMagick](https://www.imagemagick.org/script/index.php) to reduce image size-on-disk, crop pictures, etc.
     * find third-party libraries to optimize image loading 
 
# Architecture and Libraries
* I tore apart the original [design template](http://preview.themeforest.net/item/homane-minimal-resume-html-template/full_screen_preview/19682315?_ga=2.140194995.1039933768.1493948585-1211979247.1489464104), created by [khaitawngkhai](https://themeforest.net/user/khaitawngkhai), converting the html to pug, re-organizing the css and converting it into scss syntax. 
* [Pug (formerly Jade)](https://pugjs.org/api/getting-started.html) was chosen for
  * Clean templating syntax
  * Ability to use variables in the templates and populate the template via compilation with json files
  * Ability to create javacript function that takes a javascript object as a parameter and creates data-populated markup
  * Ability to create a 'master' index.pug (or main-page.pug in this code) and `include` the separate pug files created for each section of the site
* The source code is set up with a js folder, json-data folder, pug folder, and scss
* My client uses [Latex](https://www.latex-project.org/), a typsetting system commonly used in the scientific community, that relies on a .bib file as a list of publication references.  I found a nice  [bib-to-json parser](https://github.com/mayanklahiri/bib2json) written by Mayank Lahiri that let me use my client's .bib file to convert his publications into json.  From there I set up a custom build script to make adjustments to the publication data.
* Custom build scripts are set up to do the following:
  * `getJsonContent` - compiles the separate json files that exist for each section of the site into. 
  * `compilePugWithContent` - uses pug.renderFile to compile the index.pug file with the jsonContent to create the index.html file
   * `createDataModel` - creates a .js file to contain data in a data model for any data that is need for client-side rendering of a pug function
   * `processPublicationEntries` - this method is run after the .bib file is converted to json, taking care of fixing capitalization, separating selected journal papers from 'the rest'
* A number of common npm modules are used to compile scss, lint, uglify, and watch all code files
* A `watch:all` npm script command is executed to watch and compile the code during development.  Since .json files do not take comments, I had to be creative in include comments with keys starting with `// item`.  Messy, but functional.

