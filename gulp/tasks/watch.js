var gulp 	= require('gulp'),
	config 	= require('../config');

gulp.task('watch-D', function() {
	gulp.watch(config.scripts.src.dev, ['scripts-D']);
	gulp.watch(config.sass.src, ['sass-D']);
	gulp.watch(config.images.src, ['images-D']);
	gulp.watch(config.data.src, ['data-D']);
	gulp.watch(config.html.src, ['html-D','inject-D']);
});