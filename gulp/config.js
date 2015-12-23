'use strict';

module.exports = function () {

    var template = './client/index.html';

    var components = [
        './client/src/app/app.js',
        './client/src/**/*.js',
        '!./client/src/**/*.spec.js'
    ];

    var vendorScripts = [
        './client/vendors/angular/angular.js',
        './client/vendors/jquery/dist/jquery.js',
        './client/vendors/bootstrap/dist/js/bootstrap.js'
    ];

    return {
        paths: {
            src: {
                template: template,
                components: components,
                vendors: {
                    scripts: vendorScripts
                }
            },
            development: './dist/',
            release: './release/'
        }
    }
};