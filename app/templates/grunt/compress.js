(function () {
    'use strict';
	module.exports = {
		release: {
			options: {
				archive: 'archive.zip'
			},
			files: [
				{src: ['app/**', '!app/**/*.less'], dest: 'internal_folder/'}
			]
		}
	};
})();
