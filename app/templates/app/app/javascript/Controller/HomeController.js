(function(){
	'use strict';

	angular.module('<%= moduleName %>.controllers', [])
		.controller('HomeController', HomeController);

		HomeController.$inject = [];
		function HomeController(){
			this.name = 'Name';
		}
})();
