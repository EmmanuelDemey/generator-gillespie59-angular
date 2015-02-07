(function(){
	'use strict';
	var generators = require('yeoman-generator');

	var generator = generators.Base.extend({
		prompting: function () {
			var done = this.async();
			this.prompt({
				type: 'input',
				name: 'name',
				message: 'Your project name',
				default: this.appname // Default to current folder name
			}, function (answers) {
				this.appName = answers.name;
				done();
			}.bind(this));
		}
	});

	generator.prototype.packagejson = function packagejson() {
		var pkg = {
			'name': this.appName,
			'version': '0.0.0',
			'dependencies': {}
		};
		this.write('package.json', JSON.stringify(pkg));
	};

	generator.prototype.gruntfile = function gruntfile(){
		this.fs.copyTpl(
			this.templatePath('Gruntfile.js'),
			this.destinationPath('Gruntfile.js'),
			{  }
		);
	};

	generator.prototype.installWorkflowNpmDependencies = function() {
		this.npmInstall(['bower'], { 'saveDev': true });
		this.npmInstall(['grunt'], { 'saveDev': true });
		this.npmInstall(['grunt-cli'], { 'saveDev': true });
	};

	generator.prototype.installGruntPlugin = function() {
		this.npmInstall(['grunt-eslint'], { 'saveDev': true });
		this.npmInstall(['eslint-plugin-angular'], { 'saveDev': true });
		this.npmInstall(['load-grunt-config'], { 'saveDev': true });
	};
	generator.prototype.installBowerDependencies = function() {
		this.bowerInstall(['angular'], { 'save': true });
	};
	module.exports = generator;
})();
