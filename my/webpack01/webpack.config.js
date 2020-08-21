var path = require('path')

var config = {
    entry: {
        main: './main'
    },
    output: {
        path:path.join(__dirname, './dist'),
        //指定资源文件引用的目录
        publicPath: '/dist/',
        filename: 'main.js'
    },
    modules: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}

module.exports = config