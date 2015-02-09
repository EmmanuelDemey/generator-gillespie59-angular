(function () {
    'use strict';
	/**
	* https://www.npmjs.com/package/grunt-contrib-copy
	*/
	module.exports = {
		release: {
			cwd: 'app/',
			expand: true,
			src: ['**'],
			dest: 'dest/'
		}
	};
})();
