var src				= './src/',
	dist			= './build/',
	dev 			= 'dev/',
	prod			= 'prod/';
	

module.exports = {
	delete: {
		src: [dist + dev + 'assets/css', dist + dev + 'assets/js']
	},
	scripts: {
		src:  [src + 'js/vendor/*.js', src + 'js/dist/*.js'],
		dest: dist + dev + 'assets/js'
	},
	babel : {
		src:  src + 'js/*.js',
		dest: src + 'js/dist'
	},
	images: {
		src:  [src  + 'img/*',src + 'img/**/*','!' + src + 'img/arch','!' + src + 'img/arch/**/*'],
		dest: dist + dev + 'assets/img'
	},
	data: {
		src:  src  + 'data/*.json',
		dest: dist + dev + 'assets/data'
	},
	sass: {
		src:  src + 'scss/**/*.scss',
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
	}
};