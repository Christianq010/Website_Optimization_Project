var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var image = require('gulp-image');

gulp.task('minify-css', function() {
    return gulp.src('app/css/style.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('compress', function (cb) {
    pump([
            gulp.src('app/views/js/main.min.js'),
            uglify(),
            gulp.dest('dist/js')
        ],
        cb
    );
});

gulp.task('image', function () {
    gulp.src('app/views/images')
        .pipe(image())
        .pipe(gulp.dest('dist/views/images'));
});

gulp.task('default', ['image']);

//passing an object to image
gulp.task('image', function () {
    gulp.src('app/views/images/pizzeria.jpg')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            jpegoptim: true,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10
        }))
        .pipe(gulp.dest('dist/views/images'));
});
