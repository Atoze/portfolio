module.exports = {
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
