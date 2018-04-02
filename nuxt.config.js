module.exports = {
  srcDir: './client',
  build: {
    vendor: ['axios', 'element-ui'],
  },
  router: {
    middleware: ['authenticated'],
  },
  head: {
    title: 'VueJs boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Server side rendering with sequelize, express, nuxt.js' },
    ],
  },
  css: ['element-ui/lib/theme-chalk/index.css'],
  plugins: ['~plugins/element-ui'],
}

