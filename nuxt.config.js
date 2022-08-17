export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Каталог Telegram-каналов и чатов / Россия — TelegramHouse',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Один из крупнейших каталогов Telegram-каналов и чатов TelegrmHouse — Россия и СНГ. Более 898 253 каналов и чатов, классифицированных по странам, языкам и тематикам. Настоящий дом всех телеграм каналов' },
      { name: 'keywords', content: 'каталог telegram, каталог, телеграм, telegram-каналы, топ каналов, лучшие каналы, telegram, Россия'},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    serverUrl: process.env.API_URL,
    auth: process.env.AUTH,
    domain: process.env.DOMAIN
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/normalize.css',
    '~/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

  ],



  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
