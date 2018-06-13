var config = require("./webpack.config.js");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
});
server.listen(8080);