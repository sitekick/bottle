var gulp 	= require('gulp'),
	cache = require('gulp-cached'),
	config 	= require('../config');


gulp.task('libraries-D', function() {
  /* Copy all libraries to build folder */
  return gulp.src(config.lib.src.dev)
    .pipe(cache('lib'))
    .pipe(gulp.dest(config.lib.dest.dev));
});

gulp.task('libraries-P', function() {
  /* Copy non-bower libraries to build folder */
  return gulp.src(config.lib.src.prod)
    .pipe(gulp.dest(config.lib.dest.prod));
});