(function(){
	'use strict';
	/**
	* Initialization of the global AngularJS module
	*/
	angular.module('<%= moduleName %>', [
		'ui.router',
		'ngAria',
		'<%= moduleName %>.controllers'
	]);
})();
