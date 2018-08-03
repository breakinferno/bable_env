const path = require('path')

module.exports={
    entry: './src/index.js',
    devtool: 'eval-source-map',
    output: {//'./dist/index.js',
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-laoder', 'css-loader'],
                include: path.join(__dirname, 'src'), //限制范围，提高打包速度
                exclude: /node_modules/
            }
        ]
    },
    plugins: [],
    devServer: {
        contentBase: path.join(__dirname, "public"), //静态文件根目录
        port: 9090, // 端口
        host: 'localhost',
        overlay: true,
        compress: true // 服务器返回浏览器的时候是否启动gzip压缩
    }
}