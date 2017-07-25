var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var srcDir = path.resolve(process.cwd(), 'src');
var glob = require('glob');
//获取多页面的每个入口文件，用于配置中的entry
function getEntry() {
    //var jsPath = path.resolve(srcDir, 'js');
    //var dirs = fs.readdirSync(jsPath);
    //var matchs = [], files = {};
    //dirs.forEach(function (item) {
    //    matchs = item.match(/(.+)\.js$/);
    //    console.log(matchs);
    //    if (matchs) {
    //        files[matchs[1]] = path.resolve(srcDir, 'js', item);
    //    }
    //});
    //console.log(JSON.stringify(files));
    //return files;

    var entry = {};
    glob.sync('./src/js/**/*.js').forEach(function (name) {
        console.log(name);
        var arr = name.split('/');
        var secondDirName = "";
        if (arr.length > 2) {
            secondDirName = name.split('/')[3];
            console.log(secondDirName);
        }
        if (secondDirName == "lib" || secondDirName == "ui") {


        }
        else {
            console.log("打印:"+name);
            var n = name.slice(name.lastIndexOf('/js/') + 4, name.length - 3);
            console.log("截取:" + n);
            entry[n] = name;
        }
    });
    return entry;

}

module.exports = {
    cache: true,
    //devtool: "#source-map",
    devtool: "#cheap-module-eval-source-map",//dev 时使用
    entry: getEntry(),
    output: {
        path: path.join(__dirname, "dist/js/"),
        publicPath: "",//dist/js/
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
        loaders: [
        {
            test: /\.tpl$/,
            loader: "tmodjs-loader"
        },
        {
            test: /\.json$/,
            loader: "json-loader"
        }
        ]
    },
    resolve: {
        alias: {
            jquery: srcDir + "/js/lib/jquery.min.js",
            core: srcDir + "/js/core",
            ui: srcDir + "/js/ui"
           
        },
        extensions: ['.js', '.tpl', '.less', '.json', ''],
        root: [path.join(__dirname, 'src/js/tpl')]
    }

    //,//plugins: [
    //    new CommonsChunkPlugin('common.js'),
    //    new uglifyJsPlugin({
    //        compress: {
    //            warnings: false
    //        }
    //    })
    //]
};