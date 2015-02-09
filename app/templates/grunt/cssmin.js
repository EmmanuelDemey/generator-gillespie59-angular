(function () {
    'use strict';
	/**
	* https://www.npmjs.com/package/grunt-contrib-cssmin
	*/
	module.exports = {
		release: {
			files: [{
				expand: true,
				cwd: 'dest/styles',
				src: ['*.css'],
				dest: 'dest/styles',
				ext: '.css'
			}]
		}
	};
})();
