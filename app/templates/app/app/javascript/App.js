(function(){
	'use strict';
	angular.module('underscore', [])
		.factory('_', ['$window', function($window) {
			return $window._;
		}]);

	/**
	* Initialization of the global AngularJS module
	*/
	angular.module('<%= moduleName %>', [
		'ui.router',
		'ngAria',
		'underscore',
		'<%= moduleName %>.controllers'
	]);
})();
