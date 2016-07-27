var gulp 	= require('gulp'),
	del 	= require('del'),
	config 	= require('../../config');

/**
 * Delete folders and files
 */
gulp.task('delete', function() {
	del(config.delete.src);
});