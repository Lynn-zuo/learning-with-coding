const CracoLessPlugin = require('craco-less');
const path = require('path');
const pathResolve = dir => path.resolve(__dirname, dir)
// 不使用yarn inject添加此文件修改cra的默认webpack配置
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@/components': pathResolve('src/components')
    }
  }
};