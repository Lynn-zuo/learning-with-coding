const CracoLessPlugin = require('craco-less');
const resolve = require('resolve');
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
      '@': resolve('src'),
      '@/components': resolve('src/components')
    }
  }
};