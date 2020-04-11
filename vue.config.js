module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/style/variables.scss";`
      },
    }
  }
}