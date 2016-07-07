var gulp 	= require('gulp'),
	changed = require('gulp-changed'),
	config 	= require('../../config').data;

/**
 * Copy json data to build folder
 * if not changed
 */
gulp.task('data', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest));
});