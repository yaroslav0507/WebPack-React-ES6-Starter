'use strict';

gulp.task('html', function(){
   return gulp.src('./client/app/index.html')
       .pipe(gulp.dest('dist'));
});