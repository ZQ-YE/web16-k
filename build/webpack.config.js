const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    entry:'./src/index.ts',
    output:{
        filename:'app.js'
    },
    resolve:{
        // 模块导入扩展名的处理
        extensions:['.js','.ts','.tsx']
    },
    // 提高编译速度   生成source-map
    devtool:'cheap-module-eval-source-map',
    module:{
        rules:[{
            // 编译正则
            test:/\.tsx?$/,
            // loader 的使用设置
            use:[{
                loader:'ts-loader'
            }],
            // 排除不需要编译文件夹
            exclude:/node-modules/
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]

}
