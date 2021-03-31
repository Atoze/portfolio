module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? "/dist/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_reset.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  }
};
