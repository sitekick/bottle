var gulp = require('gulp'),
	gutil = require('gulp-util'),
	//browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	concat = require('gulp-concat');
	
var jsSources = [
	'components/scripts/data/products.json',
	'components/scripts/data/search.js',
	'components/scripts/searchfield.js',
	'components/scripts/modernizr/modernizr.3.3.1.mq.addcssclass.min.js',
	'components/scripts/menus.js',
	'components/scripts/jquery.autocomplete.min.js',
	'components/scripts/jquery.autocomplete.init.js',
	'components/scripts/chart.min.js',
	'components/scripts/chart.init.js'
	];
	
var sassSources = ['components/sass/style.scss'];
	
gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.on('error',gutil.log)
		//.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function() {
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'components/sass',
			image: 'builds/development/img',
			style: 'expanded'
		}))
		.on('error',gutil.log)
		.pipe(gulp.dest('builds/development/css'))
});

gulp.task('watch', function() {
	gulp.watch(jsSources, ['js']);
	gulp.watch('components/sass/*.scss', ['compass']);
});

gulp.task('default', ['js','compass', 'watch']);