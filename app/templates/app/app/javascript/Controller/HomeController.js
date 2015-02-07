(function(){
	'use strict';

	angular.module('<%= moduleName %>.controllers', [])
		.controller('HomeController', HomeController);

		HomeController.$inject = ['$scope'];
		function HomeController($scope){
			$scope.name = "Name";
		}
})();
