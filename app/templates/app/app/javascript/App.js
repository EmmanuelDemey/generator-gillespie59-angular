(function(){
	'use strict';
	angular.module('lodash', [])
		.factory('_', ['$window', function($window) {
			return $window._;
		}]);

	/**
	* Initialization of the global AngularJS module
	*/
	angular.module('<%= moduleName %>', [
		'ui.router',
		'ngAria',
		'lodash',
		'<%= moduleName %>.controllers'
	]);
})();
