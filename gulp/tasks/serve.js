var gulp = require('gulp'),
	bs = require('browser-sync').create();
	

gulp.task('serve-D', function () {
    
   
    bs.init({
		proxy: 'bottle.imac/build/dev',
		ui : false
	});
	
	bs.watch('./build/dev/index.html').on('change', bs.reload);
	bs.watch('./build/dev/assets/data/**/*.json').on('change', bs.reload);
	bs.watch('./build/dev/assets/img/**/*.{gif,png,svg,jpg}').on('change', bs.reload);
	bs.watch('./build/dev/assets/css/style.css').on('change', bs.reload);
	bs.watch('./build/dev/assets/js/scripts.js').on('change', bs.reload);
	
});


gulp.task('serve-P', function () {
    
   
    bs.init({
		proxy: 'bottle.imac/build/prod',
		ui : false
	});
	

	//bs.watch('./build/prod/index.html').on('change', bs.reload);
	//bs.watch('./build/prod/assets/data/**/*.json').on('change', bs.reload);
	//bs.watch('./build/prod/assets/img/**/*.{gif,png,svg,jpg}').on('change', bs.reload);
	//bs.watch('./build/prod/assets/css/style.css').on('change', bs.reload);
	//bs.watch('./build/prod/assets/js/scripts.js').on('change', bs.reload);

	
});