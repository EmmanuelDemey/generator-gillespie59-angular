(function () {
    'use strict';
	module.exports = {
		options: {
	    	configFile: "test/protractor.conf.js",
	 		noColor: false
		},
	  	e2e: {
	    	options: {
	      		keepAlive: false
	    	}
	  	}
	};
})();
