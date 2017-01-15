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

