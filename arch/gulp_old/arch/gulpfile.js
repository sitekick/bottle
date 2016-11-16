 var gulp = require('gulp'),
	gutil = require('gulp-util'),
	//browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	//path = require('path'),
	concat = require('gulp-concat');
	

// var env,jsSources,sassSources,sassStyle,outputDir;

env = process.env.NODE_ENV || 'development';	 

if(env==='development') {
	outputDir = 'builds/development/';
	sassStyle = 'expanded';
	//gutil.log('test1');
} else {
	outputDir = 'builds/production/';
	sassStyle = 'compressed';
	//gutil.log('test2');
}

/*
gutil.log(env);
gutil.log(sassStyle);
*/
/*
jsSources = [
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
	
sassSources = ['components/sass/style.scss'];
*/
	
/*
gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js')
		.on('error',gutil.log))
		//.pipe(browserify())
		.pipe(gulp.dest(outputDir + 'js'))
});
*/

/*
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
*/

/*
gulp.task('watch', function() {
	gulp.watch(jsSources, ['js']);
	gulp.watch('components/sass/*.scss', ['compass']);
});
*/

// gulp.task('default', ['js','compass', 'watch']);

gulp.task('set-dev-node-env', function() {
     return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', function() {
     return process.env.NODE_ENV = 'production';
});

gulp.task('build_prod', ['set-prod-node-env','default']);

gulp.task('build_dev', ['set-dev-node-env','default']);