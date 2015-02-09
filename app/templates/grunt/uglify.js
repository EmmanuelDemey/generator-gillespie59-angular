(function () {
	'use strict';
	/**
	* https://www.npmjs.com/package/grunt-contrib-uglify
	*/
	module.exports = {
		release: {
			files: [{
				expand: true,
				cwd: 'dest/javascript',
				src: ['**/*.js'],
				dest: 'dest/javascript'
			}],
			options: {

			}
		}
	};
})();
