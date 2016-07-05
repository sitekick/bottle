var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat');
	
var jsSources = [
	'components/scripts/data/products.js',
	'components/scripts/data/search.js',
	'components/scripts/searchfield.js',
	'components/scripts/modernizr/modernizr.3.3.1.mq.addcssclass.min.js',
	'components/scripts/menus.js',
	'components/scripts/jquery.autocomplete.min.js',
	'components/scripts/jquery.autocomplete.init.js',
	'components/scripts/chart.min.js',
	'components/scripts/chart.init.js'
	];
	
gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(gulp.dest('builds/development/js'))
});