'use strict';

gulp.task('watch', function(){
    gulp.watch('./client/**/*.js', ['scripts']);
    gulp.watch('./client/**/*.html', ['html', 'scripts']);
});