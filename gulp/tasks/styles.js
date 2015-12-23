'use strict';

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var merge = require('merge2');
var cssGlobbing = require('gulp-css-globbing');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('styles', function(){

    var compile = gulp.src(config.paths.src.styles, {base: 'app'})
        .pipe(cssGlobbing({
            extensions : ['.scss']
        }))

        .pipe(sass());


    var assets = gulp.src(config.paths.src.vendors.styles)
        .pipe(concat('assets.css'));

    // Combine all the streams
    return merge([assets, compile])
        .pipe(sourcemaps.init())
        .pipe(concat('app.css'))
        .pipe(sourcemaps.write('maps', {sourceRoot: '/client'}))
        .pipe(gulp.dest(config.paths.development))
        .pipe(browserSync.stream());

});