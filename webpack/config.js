'use strict';

module.exports = function() {

    const BUILD_DIRECTORY = './build';
    const SOURCE_DIRECTORY = './app';

    var scripts = {
        app: SOURCE_DIRECTORY,
        build: BUILD_DIRECTORY
    };

    return {
        paths: {
            app: scripts.app,
            build: scripts.build
        }
    }
};