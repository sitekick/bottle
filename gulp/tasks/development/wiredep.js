var gulp 			= require('gulp'),
	gutil			= require('gulp-util'),
	wiredep 		= require('wiredep').stream,
	inject 			= require('gulp-inject'),
	config 			= require('../../config');

 
gulp.task('bower', function(){
	
	var target = gulp.src(config.bower.src + config.bower.index);
	var sources = gulp.src([
		config.scripts.dest + '/scripts.js',
		config.sass.dest + '/style.css'
	],{read: false});
	
	//gutil.log(config.bower);
	

	return target.pipe(wiredep()).pipe(inject(sources, {relative: true}))
	.pipe(gulp.dest(config.bower.src));


});

