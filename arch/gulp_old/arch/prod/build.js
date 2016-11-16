var gulp 			= require('gulp'),
	runSequence		= require('run-sequence'),
	config 			= require('../../config');
	

/**
 * Run all tasks needed for a build in defined order
 */

  
 gulp.task('prod', function() {
  runSequence(
  	'delete',
  	['data','images','transpile'],
  	['scripts','sass'],
  	'serve'
  	);
  });
  
 //gulp.task('build', ['data','images','transpile','scripts','sass','watch','serve']);