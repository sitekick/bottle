var	sassSources = ['components/sass/style.scss'];


gulp.task('compass', function() {
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'components/sass',
			//project: path.join(__dirname, './'),
			//css: 'components/sass',
			image: outputDir + 'img',
			style: sassStyle
		})
		.on('error', gutil.log))
		.pipe(gulp.dest(outputDir + 'css'));
});