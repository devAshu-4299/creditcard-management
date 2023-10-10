const TerserPlugin = require("terser-webpack-plugin");
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  runtimeCompiler:true,
  configureWebpack: {
    devtool: "source-map",
    optimization: {
      runtimeChunk: "single",
      minimize: true,
      removeEmptyChunks: true,
      minimizer: [new TerserPlugin({
        terserOptions :{
          // sourceMap: true,
          drop_console:true
        }
      })],
    },
  }
})
