const { basename } = require('path');

// Mocks every media file to return its filename. Makes it possible to test that
// the correct images are loaded for components.

module.exports = {
    process: function(_, filename) {
        return `module.exports = '${basename(filename)}';`;
    }
};
