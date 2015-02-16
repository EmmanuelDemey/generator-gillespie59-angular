(function () {
    'use strict';
	module.exports = {
		styles: {
        	files: ['app/styles/*.less'], // which files to watch
        	tasks: ['less'],
        	options: {
				nospawn: true
        	}
      	}
	};
})();
