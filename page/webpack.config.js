var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
// 环境变量配置，dev / online
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
var buildDir = path.resolve(__dirname, './dist/view');
// 获取html-webpack-plugin参数的方法 
var getHtmlConfig = function(name, title) {
    return {
        template: './src/view/' + name + '.html',
        filename: name + '.html',
        title: title,
        inject: true,
        hash: false,
        chunks: ['common',name]
    };
};
// webpack config
var config = {
    entry: {
        'common': ['./src/page/common/common.js'],
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/login.js'],
        'registered': ['./src/page/registered/registered.js'],
        'details': ['./src/page/details/details.js'],
        'order' : ['./src/page/order/order.js'],
        'porder' : ['./src/page/porder/porder.js'],
        'query' :['./src/page/query/query.js'],
        'orderHistory' : ['./src/page/orderHistory/orderHistory.js']
    },
    output: {
        path: './dist',
        publicPath: '',
        filename: 'js/[name].js'
    },
    devServer: {
        contentBase: buildDir, //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },
    externals: {
        'jquery': 'window.jQuery'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=100&name=resource/[name].[ext]'
        }, {
            test: /\.string$/,
            loader: 'html-loader'
        }]
    },
    resolve: {
        alias: {
            node_modules: __dirname + '/node_modules',
            util: __dirname + '/src/util',
            page: __dirname + '/src/page',
            service: __dirname + '/src/service',
            image: __dirname + '/src/image',
            json : __dirname +'/src/json'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        }),
        // 把css单独打包到文件里
        //new ExtractTextPlugin("styles.css"),
        //new ExtractTextPlugin("styles.css"),
        new ExtractTextPlugin("css/[name].css"),
        // html模板的处理
        new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
        new HtmlWebpackPlugin(getHtmlConfig('login', '用户登录')),
        new HtmlWebpackPlugin(getHtmlConfig('registered', '用户注册')),
        new HtmlWebpackPlugin(getHtmlConfig('details', '详情页')),
        new HtmlWebpackPlugin(getHtmlConfig('order', '订单成功')),
        new HtmlWebpackPlugin(getHtmlConfig('porder', '下单页')),
        new HtmlWebpackPlugin(getHtmlConfig('query', '搜索页')),
        new HtmlWebpackPlugin(getHtmlConfig('orderHistory', '订单历史页')),

    ]
};

if ('dev' === WEBPACK_ENV) {
    //config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}

module.exports = config;