var gulp 			= require('gulp'),
	wiredep 		= require('wiredep').stream,
	config 			= require('config');



gulp.task('vendor-scripts', ['install'], function() {

  return gulp.src(wiredep().js)

    .pipe(gulp.dest(dist + dev));

});