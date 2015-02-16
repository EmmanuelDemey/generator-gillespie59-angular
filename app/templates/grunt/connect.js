(function () {
    'use strict';
	module.exports = {
		release: {
			options: {
				hostname: 'localhost',
				port: 9001,
				base: 'dest',
				keepalive: true,
				open: true
			}
		},
		dev: {
			options: {
				hostname: 'localhost',
				port: 9001,
				base: 'app',
				livereload: true,
				open: true
			}
		}
	};
})();
