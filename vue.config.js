const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["quasar"],
  devServer: {
    allowedHosts: "all",
  },
  pluginOptions: {
    vuetify: {},
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
});
