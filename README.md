## Website Performance Optimization portfolio project

**Optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.**

In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).


### Getting started

#File Structure
###### app #######
Contains most/ nearly all files and directories forked from the original project (images, JS, CSS etc).

###### dist/ #######
Contains files and directories from tools and builds used to automate workflow such as gulp, compressed images etc.

##Solution
###The Build
**Installed Gulp [http://gulpjs.com/] so that CSS and JS can be minified.** 

To Install Gulp on Windows using the command prompt.

1. Install Node.js [https://nodejs.org/en/] on your system prior to installing Gulp.

2. Run this command to install the Gulp command line interface

  ```
  $> npm install gulp-cli -g
  ```

3. Initialize your package.json file and fill out it's details appropriately.

  ```
  C:\Users\Christiaan\PhpstormProjects> npm init
  ```    

4. Run this command from your project root folder to install gulp into your project

  ```
  C:\Users\Christiaan\PhpstormProjects> npm install gulp --save-dev
  ```    

5. Create a JS filed named gulpfile.js in your project root directory.

6. Type the following into your gulpfile.js to create gulp tasks, name and run them.

  ```gulpfile.js
  //Create a variable named gulp to reference our gulp files in the node_modules folder when installed
  var gulp = require('gulp');
  
  //create a task name that will perform something when called upon
  gulp.task('task-name',function () {
      //do something eg. console.log('Hello World');
  });
  ```    

7. Install Gulp plug ins gulp-clean-css [https://www.npmjs.com/package/gulp-clean-css/] and gulp-uglify[https://www.npmjs.com/package/gulp-uglify/] following the instructions on the site. 

8. Your gulpfile.js should look something like this 


9. Run the following commands on your command line interface to run gulp and minify CSS / uglify JS


####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

#Resources
### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
