var gulp 	= require('gulp'),
	concat 	= require('gulp-concat'),
	config 	= require('../../config').scripts;


gulp.task('scripts', function() {
	gulp.src(config.src)
		.pipe(concat('script.js'))
		.pipe(gulp.dest(config.dest))
});