var gulp 	= require('gulp'),
	concat 	= require('gulp-concat'),
	config 	= require('../../config');


gulp.task('code', function() {
	gulp.src(config.coding.src)
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(config.coding.dest));
});