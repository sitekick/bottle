
var src				= 'app',
	build			= 'build',
	development 	= 'build/development',
	production		= 'build/production',
	srcAssets       = 'app/assets',
	devAssets 		= 'build/assets',
	prodAssets  	= 'build/production/assets'
	;
	

module.exports = {
	delete: {
		src: [devAssets]
	},
	scripts: {
		//src:  srcAssets + '/scripts/**/*.{js,json}',
		src:  srcAssets + '/scripts/*.{js,json}',
		dest: devAssets + '/scripts'
	},
	images: {
		//src:  srcAssets + '/img/**/*',
		src:  srcAssets + '/img/*',
		dest: devAssets + '/img'
	},
	sass: {
		//src:  srcAssets + '/sass/**/*.{sass,scss}',
		src:  srcAssets + '/sass/*.{sass,scss}',
		dest: devAssets + '/css',
		options: {
			noCache: true,
			compass: false,
			//bundleExec: true,
			bundleExec: false,
			sourcemap: true
  		}
	},
	autoprefixer: {
		browsers: [
		'last 2 versions',
		'safari 5',
		'ie 8',
		'ie 9',
		'opera 12.1',
		'ios 6',
		'android 4'
		],
		cascade: true
	},
	watch: {
		sass:    srcAssets + '/sass/*.{sass,scss}',
		scripts: srcAssets + '/scripts/*.{js,json}',
		images:  srcAssets + '/img/**/*'
	}
};