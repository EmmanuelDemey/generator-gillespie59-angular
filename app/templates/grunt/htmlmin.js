(function () {
    'use strict';
	/**
	* Check the quality of our JS files
	*/
	module.exports = {
		release: {
			options: {
				removeComments: true,
				collapseWhitespace: true
			},
			files: [{
				expand: true,
                cwd: 'dest/',
                src: ['index.html', 'template/**/*.html'],
                dest: 'dest/'
			}]
		}
	};
})();
