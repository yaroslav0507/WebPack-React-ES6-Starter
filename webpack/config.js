'use strict';

module.exports = function() {

    var BUILD_DIRECTORY = './build/';
    var SOURCE_DIRECTORY = './app/';

    var scripts = {
        input: SOURCE_DIRECTORY + 'index.web.js',
        output: BUILD_DIRECTORY + 'app.js'
    };

    return {
        paths: {
            scripts: {
                input: scripts.input,
                output: scripts.output
            }
        }
    }
};