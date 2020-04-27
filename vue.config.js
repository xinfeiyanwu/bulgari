module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
}