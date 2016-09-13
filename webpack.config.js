var path = require('path');

var srcPath = path.resolve(__dirname, 'src');

module.exports = {
    context: __dirname,
    entry: {
        bundle: ['./src/index.js']
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                include: srcPath,
            }
        ],
        loaders: [
            { test: /\.js$/, include: srcPath, loader: "babel-loader" },
            { test: /\.html$/, exclude: /node_modules/, loader: "raw-loader" },
            { test: /\.css$/, exclude: /node_modules/, loaders: ["style-loader", "css-loader"] }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true,
        port: 3000
    }
};