const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    experiments: {
        topLevelAwait: true
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                context: path.resolve(__dirname, 'src'),
                from: '*.html'
            }]
        })
    ]
};