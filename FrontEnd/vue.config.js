module.exports = {
    lintOnSave: false,
    publicPath: "./",
    assetsDir: "static",
    productionSourceMap: false,
    // configureWebpack: {
    //     // 警告 webpack 的性能提示
    //     performance: {
    //         hints: "warning",
    //         // 入口起点的最大体积
    //         maxEntrypointSize: 50000000,
    //         // 生成文件的最大体积
    //         maxAssetSize: 30000000,
    //         // 只给出 js 文件的性能提示
    //         assetFilter: function (assetFilename) {
    //             return assetFilename.endsWith(".js");
    //         },
    //     },
    // },
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                additionalData: `@import "~@/common/styles/index.sass"`,
            },
            scss: {
                additionalData: `@import "~@/common/styles/index.scss";`,
            },
        },
    },
    // devServer: {
    //     proxy: {
    //         '/api':{
    //             target:'',
    //             changeOrigin:true,
    //             pathRewrite:{
    //                 '/api':''
    //             }
    //         }
    //     }
    // }
};
