(function () {
    'use strict';
	/**
	* https://www.npmjs.com/package/grunt-contrib-htmlmin
	*/
	module.exports = {
		release: {
			options: {
				removeComments: true,
				collapseWhitespace: true
			},
			files: {
				expand: true,
                cwd: 'dest/',
                src: ['index.html', 'template/**/*.html'],
                dest: 'dest/'
			}
		}
	};
})();
