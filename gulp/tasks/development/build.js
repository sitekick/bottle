var gulp 			= require('gulp'),
	runSequence		= require('run-sequence'),
	config 			= require('../../config');


/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function() {
  runSequence(
  	'delete',
  	['data','images','scripts','sass'],
  	'watch'
  	);
  });