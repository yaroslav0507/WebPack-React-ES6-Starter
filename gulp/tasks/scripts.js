'use strict';

var merge = require('merge2');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function(){

    var vendors = gulp.src(config.paths.src.vendors.scripts, {base: 'vendors'});

    var app = gulp.src(config.paths.src.components, {base: 'src'});

    var views = gulp.src(config.paths.src.views)
        .pipe(templateCache({
            module: 'app'
        }));

    return merge([vendors, app], views)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('maps', {sourceRoot: '/client'}))
        .pipe(gulp.dest(config.paths.development))
        .on('end', browserSync.reload);
});