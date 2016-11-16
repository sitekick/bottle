var gulp 	= require('gulp'),
	concat 	= require('gulp-concat'),
	uglify	= require('gulp-uglify'),
	bower = require('main-bower-files'),
	config 	= require('../config');

gulp.task('vendor-js-min', function() {
	/* concats bower js components main files to js/vendor; with minifying  */
	gulp.src(bower('**/*.js'))
	.pipe(uglify())
	.pipe(concat('00_bower.js'))
	.pipe(gulp.dest(config.bower.dest));
});

gulp.task('scripts-D', function() {
	/* copies custom scripts and non-bower vendor to scripts.js */
	gulp.src(config.scripts.src.dev)
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest(config.scripts.dest.dev));
});

gulp.task('scripts-transpiled', function() {
	/* copies vendor, bower, and transpiled scripts to scripts.js */
	gulp.src(config.scripts.src.dist)
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest(config.scripts.dest.dev));
});


gulp.task('scripts-transpiled-min', function() {
	
	gulp.src(config.scripts.src.prod)
	.pipe(concat('scripts.js'))
	.pipe(uglify())
	.pipe(gulp.dest(config.scripts.dest.prod));
});