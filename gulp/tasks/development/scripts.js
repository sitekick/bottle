var gulp 	= require('gulp'),
	concat 	= require('gulp-concat'),
	config 	= require('../../config').scripts;


gulp.task('scripts', function() {
	gulp.src(config.src)
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(config.dest));
});