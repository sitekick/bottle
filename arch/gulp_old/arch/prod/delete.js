var gulp 	= require('gulp'),
	del 	= require('del'),
	config 	= require('../../config');

/**
 * Delete folders and files
 */
gulp.task('deleteD', function() {
	del(config.delete.src.dev);
});

gulp.task('deleteP', function() {
	del(config.delete.src.prod);
});