var gulp 			= require('gulp'),
	plumber      	= require('gulp-plumber'),
	sass    		= require('gulp-ruby-sass'),
	gulpFilter  	= require('gulp-filter'),
	sourcemaps  	= require('gulp-sourcemaps'),
	autoprefixer	= require('gulp-autoprefixer'),
	config 			= require('../../config');


gulp.task('sass', function() {
  
  var sassConfig = config.sass.options;

   // Don’t write sourcemaps of sourcemaps
  var filter = gulpFilter(['*.css', '!*.map'], { restore: true });
  
  
  return sass(config.sass.src, sassConfig)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(config.autoprefixer))
    //.pipe(filter) // Don’t write sourcemaps of sourcemaps
    .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: 'src/scss' }))
    //.pipe(filter.restore) // Restore original files
    .pipe(gulp.dest(config.sass.dest));
});