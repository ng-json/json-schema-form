const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'json-schema-form.js',
        library: 'json-schema-form',
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    plugins: [
        new PeerDepsExternalsPlugin(),
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
};

