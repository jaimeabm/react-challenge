var webpack = require("webpack")
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', "./src/index.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        sourceMapFilename: 'js/bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }
                }]
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }
                }, 'sass-loader']
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: "fonts/[name].[ext]",
                },
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: false,
                                quality: 80
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: true,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CopyWebpackPlugin([
            {from:'img',to:'img'} 
        ]),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            },
            PRODUCTION: JSON.stringify(false),
            VERSION: JSON.stringify("1.0"),
            BROWSER_SUPPORTS_HTML5: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            sourceMap: true,
            mangle: true
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: "./index.html",
            "files": {
                "css": ["css/main.css"],
                "js": ["js/head_bundle.js", "js/bundle.js"],
                "img": ["img/"],
                "chunks": {
                    "head": {
                        "entry": "js/head_bundle.js",
                        "css": ["src/css/main.css"]
                    },
                    "main": {
                        "entry": "js/bundle.js"
                    },
                }
            }
        })
    ]
};