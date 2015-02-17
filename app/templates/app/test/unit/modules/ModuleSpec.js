(function(){

	'use strict';

	describe('<%= name %> Module:', function() {

		var module;
		beforeEach(function() {
			module = angular.module('<%= name %>');
		});

		it('should be registered', function() {
			expect(module).not.toBeNull();
		});

		describe('Dependencies:', function() {

			var deps;
			var hasModule = function(m) {
				return deps.indexOf(m) >= 0;
			};

			beforeEach(function() {
				deps = module.value('appName').requires;
			});

			it('should have ui.router as a dependency', function() {
				expect(hasModule('ui.router')).toBeTruthy();
			});

			it('should have ngAria as a dependency', function() {
				expect(hasModule('ngAria')).toBeTruthy();
			});

			it('should have underscore as a dependency', function() {
				expect(hasModule('underscore')).toBeTruthy();
			});
			
			it('should have <%= name %>.controllers as a dependency', function() {
				expect(hasModule('<%= name %>.controllers')).toBeTruthy();
			});
		});
	});
})();