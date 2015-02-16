(function(){

	'use strict';

	describe('<%= name %> Controllers Module:', function() {

		var module;
		beforeEach(function() {
			module = angular.module('<%= name %>.controllers');
		});

		it('should be registered', function() {
			expect(module).not.toBeNull();
		});
	});
})();