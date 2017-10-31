const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack'); 
const path = require('path');
//prd

var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});
const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [path.join(__dirname, '..', 'src')],
                options: {
                  formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader!eslint-loader',
                        css: ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: "css-loader"
                        }),
                        scss:  ExtractTextPlugin.extract({
                            use: [{
                                loader: "css-loader"
                            }, {
                                loader: "sass-loader"
                            }],
                            // use style-loader in development 
                            fallback: "style-loader"
                        }),
                        less:  ExtractTextPlugin.extract({
                            use: [{
                                loader: "css-loader"
                            }, {
                                loader: "less-loader"
                            }],
                            // use style-loader in development 
                            fallback: "style-loader"
                        })
                    }
                }
            },

            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                        loader: 'url-loader',
                        options: {
                          limit: 8192
                        }
                    }]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development 
                    fallback: "style-loader"
                })
            },
            {
                test: /\.less$/,
                use: [{
                        loader: "style-loader" // creates style nodes from JS strings 
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS 
                    }, {
                        loader: "less-loader" // compiles Less to CSS 
                    }]
            }
        ]
    },
    plugins: [
        extractSass,
        /*new OptimizeCssAssetsPlugin({
            canPrint: true
        }),
        new webpack.optimize.UglifyJsPlugin(),*/
        //new HtmlWebpackPlugin({template: './src/index.html'})
      ],
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js',
            vuex: 'vuex/dist/vuex.js'
        }
    }
};

module.exports = config;