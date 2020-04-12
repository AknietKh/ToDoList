module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/style/variables.scss";'
      }
    }
  },
  // Отключает eslint в dev режиме
  lintOnSave: process.env.NODE_ENV !== 'production'
}
