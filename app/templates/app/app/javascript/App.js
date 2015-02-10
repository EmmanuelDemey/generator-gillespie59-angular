(function(){
	'use strict';
	/**
	* Initialization of the global AngularJS module
	*/
	angular.module('<%= moduleName %>', [
		'ui.router',
		'<%= moduleName %>.controllers'
	]);
})();
