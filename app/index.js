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

	generator.prototype.packagejson = function() {
		var pkg = {
			'name': this.appName,
			'version': '0.0.0',
			'dependencies': {}
		};
		this.write('package.json', JSON.stringify(pkg));
	};

	generator.prototype.gruntfile = function(){
		this.fs.copy(
			this.templatePath('Gruntfile.js'),
			this.destinationPath('Gruntfile.js')
		);
	};

	generator.prototype.bower = function(){
		this.fs.copyTpl(
			this.templatePath('bower.json'),
			this.destinationPath('bower.json'),
			{
				name: this.appName,
				version: '0.0.0'
			}
		);
	};

	generator.prototype.readme = function(){
		this.fs.copyTpl(
			this.templatePath('README.md'),
			this.destinationPath('README.md'),
			{
				name: this.appName
			}
		);
	};

	generator.prototype.bowerrc = function(){
		this.fs.copy(
			this.templatePath('.bowerrc'),
			this.destinationPath('.bowerrc')
		);
	};

	generator.prototype.app = function(){
		this.directory(
			this.templatePath('app'),
			this.destinationPath('./')
		);
	};

	generator.prototype.grunt = function(){
		this.directory(
			this.templatePath('grunt'),
			this.destinationPath('./grunt/')
		);
	};

	generator.prototype.override = function(){
		var $this = this;
		var option = {
			name: this.appName,
			moduleName: this.appName.toLowerCase().replace(/\s+/g, '-')
		};

		['app/app/index.html', 'app/app/javascript/App.js', 'app/app/javascript/Controller/HomeController.js']
		.forEach(function(file, index){
			$this.fs.copyTpl(
				$this.templatePath(file),
				$this.destinationPath(file.substr(4)),
				option
			);
		});
	};

	generator.prototype.installNpmDependencies = function() {
		var dependencies = [
			'bower',
			'grunt',
			'grunt-cli',
			'grunt-contrib-clean',
			'grunt-contrib-copy',
			'grunt-contrib-cssmin',
			'grunt-contrib-htmlmin',
			'grunt-contrib-imagemin',
			'grunt-contrib-uglify',
			'grunt-eslint',
			'grunt-contrib-csslint',
			'grunt-travis-lint',
			'eslint-plugin-angular',
			'eslint-plugin-jasmine',
			'load-grunt-config'
		];
		this.npmInstall(dependencies, { 'saveDev': true });
	};
	generator.prototype.installBowerDependencies = function() {
		this.bowerInstall(['angular'], { 'save': true });
		this.bowerInstall(['angular-mocks'], { 'save': true });
		this.bowerInstall(['angular-ui-router'], { 'save': true });
		this.bowerInstall(['lodash'], { 'save': true });
	};
	module.exports = generator;
})();
