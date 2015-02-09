(function(){
	'use strict';
	/**
	* Initialization of the global AngularJS module
	*/
	var <%= moduleName %> = angular.module('<%= moduleName %>', [
		'ui.router', 
		'<%= moduleName %>.controllers'
	]);

	<%= moduleName %>.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$compileProvider',
		function($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {
			$locationProvider.html5Mode({
				enabled: true
			});
			$compileProvider.debugInfoEnabled(false);
			$urlRouterProvider.otherwise('/');
			$stateProvider.state('home', {
				url: '/',
				templateUrl: 'template/View/home.html',
				controller: 'HomeController'
			});
	}]);
})();
