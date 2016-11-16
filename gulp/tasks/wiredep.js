var gulp 			= require('gulp'),
	gutil			= require('gulp-util'),
	wiredep 		= require('wiredep').stream,
	inject 			= require('gulp-inject'),
	config 			= require('../config');

 
gulp.task('inject-D', function(){
	
	var target = gulp.src(config.bower.src.dev + config.bower.index);
	var sources = gulp.src([
		config.scripts.dest.dev + '/scripts.js',
		config.sass.dest.dev + '/style.css'
	],{read: false});
	
	/* bower scripts are pulled from lib directory while build */

	return target.pipe(wiredep({
		ignorePath : '../../src/lib/',
		fileTypes: {
            html: {
                replace: {
                    js: '<script src="assets/lib/{{filePath}}"></script>',
                    css: '<link rel="stylesheet" href="assets/lib/{{filePath}}" />'
                }
            }
        }
		})).
	pipe(inject(sources, {relative: true}))
	.pipe(gulp.dest(config.bower.src.dev));

});

gulp.task('inject-P', function(){
	
	var target = gulp.src(config.bower.src.prod + config.bower.index);
	var sources = gulp.src([
		config.scripts.dest.prod + '/scripts.js',
		config.sass.dest.prod + '/style.css'
	],{read: false});
	
	return target.pipe(wiredep({
		ignorePath : '../../src/lib/',
		fileTypes: {
            html: {
                replace: {
                    js: '',
                    css: '<link rel="stylesheet" href="assets/lib/{{filePath}}" />'
                }
            }
        }
		}
	)).pipe(inject(sources, {relative: true}))
	.pipe(gulp.dest(config.bower.src.prod));

});

