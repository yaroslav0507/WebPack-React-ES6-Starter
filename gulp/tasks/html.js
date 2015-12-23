'use strict';

gulp.task('html', function(){
   return gulp.src(config.paths.src.template)
       .pipe(gulp.dest(config.paths.development));
});