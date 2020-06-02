// vue.config.js
module.exports = {
    publicPath: "./",//部署应用包时的基本 URL
    outputDir: "dist",//打包名称
    devServer: {//开发服务
        port: 7777
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("postcss-px-to-viewport")({
                        unitToConvert: "px",//需要转换的单位，默认为"px"(String)
                        viewportWidth: 750,//设计稿的视口宽度(Number)
                        unitPrecision: 3,//单位转换后保留的精度(Number)
                        propList: ["*"],//能转化为vw的属性列表
                        viewportUnit: "vw",//希望使用的视口单位 (String)
                        fontViewportUnit: "vw",//字体使用的视口单位(String)
                        selectorBlackList: [],
                        minPixelValue: 1,
                        mediaQuery: false,
                        replace: true,
                        exclude: /([\/\\])(node_modules)([\/\\])/,
                    })
                ]
            }
        }
    }
}