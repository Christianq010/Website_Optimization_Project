## Website Performance Optimization portfolio project

Repository hosted via Github pages at - https://christianq010.github.io/Website_Optimization_Project/

**Optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.**

In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).


### Getting started

#File Structure
###### app/ #######
Contains most/ nearly all files and directories forked from the original project (images, JS, CSS etc).

###### dist/ #######
Contains files and directories from tools and builds used to automate workflow such as gulp, compressed images etc.

##Solution

####Part 1: Optimize PageSpeed Insights score for index.html

1. Attribute media="print" added to the print.css to unblock critical rendering path.
2. Attribute async added to Google Analytics Script to prevent blocking of DOM construction. 
3. Minified perfmatters.js script file.
4. Minified and In-lined style.css
5. Loaded Google Fonts asyncronoulsy with the Web Font Loader.
6. Compressed all Images using gulp-image, resized pizzeria.jpg


####Part 2: Optimize Frames per Second in pizza.html

Modify views/js/main.js to a frames per second rate of 60 fps or higher.

1. Added meta tags to <head>.
2. Variables declared outside of loops.
3. Edited function changePizzaSizes to use the variable pizzaContainer in loop.
4. 
5.
6.


You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

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
  $> npm init
  ```    

4. Run this command from your project root folder to install gulp into your project

  ```
  $> npm install gulp --save-dev
  ```    

5. Create a JS filed named gulpfile.js in your project root directory.

6. Your gulpfile.js would look something like this - to create gulp tasks, name and run them.

  ```gulpfile.js
  //Create a variable named gulp to reference our gulp files in the node_modules folder when installed
  var gulp = require('gulp');
  
  //after each task/plugin install, create a task name that will perform the task when called upon
  gulp.task('task-name',function () {
      //do something eg. console.log('Hello World');
  });
  ```    

7. Install the following Gulp plug ins

    * Minify CSS with gulp-clean-css [https://www.npmjs.com/package/gulp-clean-css/]

      ```
      $> npm install gulp-clean-css --save-dev
      ```    
    
    * To help handle error conditions with Node streams install gulp-pump [https://github.com/mafintosh/pump] 
    
      ```
      $> npm install pump
      ```    
    
    * Minify JS with gulp-uglify[https://www.npmjs.com/package/gulp-uglify/] 

      ```
      $> npm install --save-dev gulp-uglify
      ```    

8. Update your gulpfile.js, changing the .src and .dest defined below to your own respective project directory locations

  ```gulpfile.js
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('minify-css', function() {
    return gulp.src('app/css/style.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('compress', function (cb) {
    pump([
            gulp.src('app/js/perfmatters.js'),
            uglify(),
            gulp.dest('dist/js')
        ],
        cb
    );
});
  ```    


9. Run the following commands on your command line interface to run gulp and minify CSS / uglify JS

    * Minify CSS
      ```
      $> gulp minify-css
      ```    
    
    * Minify JS
      ```
      $> gulp compress
      ```    


#Resources
### Optimization Tips and Tricks
* [Web Font Loader](https://github.com/typekit/webfontloader)
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

### Additional Gulp Plug-ins
* Optimize various image formats with gulp-mage [https://www.npmjs.com/package/bsh-iot-gulp-image/]

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
