(function(){

	'use strict';

	describe('HomeController:', function() {
		angular.isUndefined(undefined);
		var httpBackend, scope, createController;

		beforeEach(module('<%= name %>.controllers'));
		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();

			createController = function() {
				return $controller('HomeController', {
					'$scope': scope
				});
			};
		}));

		it('should have the name property in its scope.', function () {
			createController();
			expect(scope.name).toBeDefined();
			expect(scope.name).toEqual('Name');
		});

	});
})();