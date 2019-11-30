const pkg = require('./package')

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */

  head: {
    title: 'portfolio-photo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // webfontの追加
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Sawarabi+Mincho&display=swap" rel="stylesheet'},
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

  css: [
    'reset-css',
    '~/assets/scss/style.scss'
  ],

  generate: {
    fallback: true
  },
    mode: 'universal',

    
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

