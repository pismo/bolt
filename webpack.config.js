const
webpack = require('webpack'),
ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 8080,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
    },
    module: {
        loaders: [
            {   test: /\.(js|jsx)$/,
                loader: 'babel-loader', 
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css"),
    ]
}