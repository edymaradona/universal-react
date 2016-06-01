// *****************************************************************************
// WEBPACK CONFIGURATION
// *****************************************************************************

var fs = require('fs');

// Setup the React Hot Loader if we are working in the development environment
if (process.env.NODE_ENV === 'development') {
    var loaders = ['react-hot', 'babel'];
} else {
    var loaders = ['babel'];
}

// Here we create the path that our bundled file will be saved too
fs.mkdir('./src/jsx', 0777, function(err) {
    if (!err) {
        console.log("Folder for bundle.js created to serve code");
    }
});
// Definitng the output path for our bundle file
var outputPath = __dirname + '/src/jsx'

// The modules we are using
module.exports = {
    devtool: 'eval',
    entry: './src/main.js',
    output: {
        path: outputPath,
        filename: 'bundle.js',
        publicPath: '/jsx/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: loaders,
            exclude: /node_modules/
        }]
    }
};
