module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        'common':"@/common",
        'assets':"@/assets",
        'network':"@/network",
        'components':"@/components",
        'views':'@/views',

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
