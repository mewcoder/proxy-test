const { getRouter } = require("./proxy.switch.js");
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "localhost", // api接口基础路径
        changeOrigin: true, // 是否支持跨域
        ws: true,
        router: getRouter,
        pathRewrite: {
          "^/api": "", // 重写路径：去掉路径中开头的 '/api'
        },
      },
    },
  },
};
