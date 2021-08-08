const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.css',
    output: {
        path: resolve(__dirname, 'static', 'dist'),
    },
    mode: 'production',
    module: {
        rules: [
            { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"] }
        ]
    },
    plugins: [new MiniCssExtractPlugin()]
}
