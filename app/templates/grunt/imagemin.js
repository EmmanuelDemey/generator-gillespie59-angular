(function () {
    'use strict';
	/**
	* https://www.npmjs.com/package/grunt-contrib-imagemin
	*/
	module.exports = {
		release: {
			files: [{
				expand: true,
				cwd: 'dist/',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'dist/'
			}]
		}
	};
})();
