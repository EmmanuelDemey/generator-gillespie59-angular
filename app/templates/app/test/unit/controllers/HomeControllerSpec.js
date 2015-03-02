(function(){

	'use strict';

	describe('HomeController:', function() {
		var createController, controller;

		beforeEach(module('<%= name %>.controllers'));
		beforeEach(inject(function ($controller) {
			createController = function() {
				controller = $controller('HomeController', {});
			};
		}));

		it('should have the name property in its scope.', function () {
			createController();
			expect(controller.name).toBeDefined();
			expect(controller.name).toEqual('Name');
		});

	});
})();
