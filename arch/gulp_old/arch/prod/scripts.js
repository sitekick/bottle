var gulp 	= require('gulp'),
	concat 	= require('gulp-concat'),
	uglify	= require('gulp-uglify'),
	config 	= require('../../config');


gulp.task('scripts', function() {
	
	gulp.src(config.scripts.src.prod)
	.pipe(concat('scripts.js'))
	.pipe(uglify())
	.pipe(gulp.dest(config.scripts.dest));
	
});