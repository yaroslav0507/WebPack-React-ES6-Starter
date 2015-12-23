'use strict';

module.exports = function () {

    var template = './client/index.html';

    var views = ['./client/**/*.html'];

    var components = [
        './client/src/app/app.js',
        './client/src/**/*.js',
        '!./client/src/**/*.spec.js'
    ];

    var styles = [
        './client/scss/core.scss'
    ];

    var vendorScripts = [
        './client/vendors/angular/angular.js',
        './client/vendors/angular-aria/angular-aria.js',
        './client/vendors/angular-animate/angular-animate.js',
        './client/vendors/angular-material/angular-material.js',
        './client/vendors/angular-messages/angular-messages.js'
    ];

    var vendorStyles = [
        './client/vendors/angular-material/angular-material.min.css'
    ];

    return {
        paths: {
            src: {
                template: template,
                views: views,
                components: components,
                styles: styles,
                vendors: {
                    scripts: vendorScripts,
                    styles: vendorStyles
                }
            },
            development: './dist/',
            release: './release/'
        }
    }
};