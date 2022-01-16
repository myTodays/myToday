module.exports = {
    // baseUrl: "./",
    publicPath: './',
    assetsDir: "static",
    productionSourceMap: false,
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                additionalData: `@import "~@/styles/index.sass"`,
            },
            scss: {
                additionalData: `@import "~@/styles/index.scss";`,
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
