var src				= './src/',
	dist			= './build/',
	dev 			= 'dev/',
	prod			= 'prod/';
	

module.exports = {
	delete: {
		src: [dist + dev + 'assets/css', dist + dev + 'assets/js']
	},
	scripts: {
		//src:  srcAssets + '/scripts/**/*.{js,json}',
		//src:  src + 'js/*.{js,json}',
		//exclude: [],
		src:  [src + 'js/**/*.js','!' + src + 'js/arch/**/*'],
		dest: dist + dev + 'assets/js'
	},
	images: {
		//src:  srcAssets + '/img/**/*',
		
		src:  [src  + 'img/*',src + 'img/**/*','!' + src + 'img/arch','!' + src + 'img/arch/**/*'],
		dest: dist + dev + 'assets/img'
	},
	data: {
		//src:  srcAssets + '/img/**/*',
		src:  src  + 'data/*.{csv,json}',
		dest: dist + dev + 'assets/data'
	},
	sass: {
		//src:  srcAssets + '/sass/**/*.{sass,scss}',
		src:  src + 'scss/**/*.scss',
	
		//src:  src + 'scss/style.scss',
		dest: dist + dev + 'assets/css',
		options: {
			noCache: true,
			compass: false,
			//bundleExec: true,
			//sourcemapPath: '../src/scss',
			bundleExec: false,
			sourcemap: true,
			style: 'expanded'
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
	bower:{
		src: dist + dev,
		index: 'index.html'
	},
	watch: {
		sass:    src + 'scss/**/*.scss',
		scripts: src + 'js/*.{js,json}',
		images:  src + 'img/**/*'
	}
};