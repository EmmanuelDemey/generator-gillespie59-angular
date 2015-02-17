(function(){
	'use strict';
	var underscore = angular.module('underscore', [])
		.factory('_', function() { 
			return window._;
		});
		
	/**
	* Initialization of the global AngularJS module
	*/
	angular.module('<%= moduleName %>', [
		'ui.router',
		'ngAria',
		'<%= moduleName %>.controllers'
	]);
})();
