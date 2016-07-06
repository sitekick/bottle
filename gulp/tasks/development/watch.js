var gulp 	= require('gulp'),
	config 	= require('../../config').watch;

gulp.task('watch', function() {
	gulp.watch(config.scripts, ['scripts']);
	gulp.watch(config.sass, ['sass']);
	gulp.watch(config.images, ['images']);
});