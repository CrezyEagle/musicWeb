module.exports = {

  //修改网页标签默认图片
  pwa: {

    iconPaths: {

      favicon32: '老鹰.png',

      favicon16: '老鹰.png',

      appleTouchIcon: '老鹰.png',

      maskIcon: '老鹰.png',

      msTileImage: '老鹰.png'

    }

  },

  //配置快捷路径
  configureWebpack: {
    resolve: {
      alias: {
        'common': "@/common",
        'assets': "@/assets",
        'components': "@/components",
        'views': '@/views',
        'network': '@/network',

      }
    }
  },
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }

}
