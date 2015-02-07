(function () {
    'use strict';
	/**
	* Check the quality of our JS files
	*/
	module.exports = {
		app: ['app/javascript/**/*.js'],
		test: ['tests/**/*.js'],
		options: {
			config: 'config/eslint.json',
			rulesdir: ['config/rules']
		}
	};
})();
