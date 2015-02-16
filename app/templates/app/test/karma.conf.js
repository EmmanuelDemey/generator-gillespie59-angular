(function(){
    'use strict';

    // Karma configuration
    // Generated on Fri Feb 07 2014 10:58:31 GMT+0100 (Paris, Madrid)

    module.exports = function(config) {
        config.set({

            // base path, that will be used to resolve files and exclude
            basePath: '../',


            // Used to change your templates/views into js testable files.

            // frameworks to use
            frameworks: ['jasmine'],

            plugins: [
                'karma-phantomjs-launcher',
                'karma-jasmine',
                'karma-ng-html2js-preprocessor'
            ],
            // list of files / patterns to load in the browser
            files: [
                'app/vendor/angular/angular.js',
                'app/vendor/**/*.js',
                'app/javascript/**/*.js',
                'test/unit/**/*.js',
                'app/template/**/*.html'
            ],


            // list of files to exclude
            exclude: [
                'app/vendor/**/*Spec.js',
                'app/vendor/**/*.conf.js'
            ],

            // generate js files from html templates
            preprocessors: {
                'app/template/**/*.html': 'ng-html2js'
            },

            // test results reporter to use
            // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
            reporters: ['progress'],


            // web server port
            port: 9876,


            // enable / disable colors in the output (reporters and logs)
            colors: true,


            // level of logging
            // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
            logLevel: config.LOG_INFO,


            // enable / disable watching file and executing tests whenever any file changes
            autoWatch: true,


            // Start these browsers, currently available:
            // - Chrome
            // - ChromeCanary
            // - Firefox
            // - Opera (has to be installed with `npm install karma-opera-launcher`)
            // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
            // - PhantomJS
            // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
            browsers: ['PhantomJS'],


            // If browser does not capture in given timeout [ms], kill it
            captureTimeout: 60000,


            // Continuous Integration mode
            // if true, it capture browsers, run tests and exit
            singleRun: true
        });
    };
})();