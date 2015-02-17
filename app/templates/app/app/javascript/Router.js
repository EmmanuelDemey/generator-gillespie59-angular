(function(){
	'use strict';

	angular.module('<%= moduleName %>')
		.config(RouterConfig)
		.run(AppRun);

	RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$compileProvider'];
	function RouterConfig($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {
			$locationProvider.html5Mode({
				enabled: true
			});
			$compileProvider.debugInfoEnabled(false);
			$urlRouterProvider.otherwise('/');
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'template/View/home.html',
					controller: 'HomeController',
					controllerAs: 'home'
				})
				.state('404', {
					url: '/404',
					templateUrl: 'template/View/404.html'
				});
	}

	AppRun.$inject = ['$rootScope','$state'];
	function AppRun($rootScope, $state){
		$rootScope.$on('$stateChangeError', function(){
			$state.go('404');
		});
	}
})();
