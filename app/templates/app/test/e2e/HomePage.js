(function(){
	'use strict';

	describe('Home Page ', function() {

		beforeAll(function () {
			browser.get('/');
		});

		it('should display the "Name" h1 title', function(){
			expect(element(by.tagName('h1')).isPresent()).toBeTruthy();
		});
	});
})();