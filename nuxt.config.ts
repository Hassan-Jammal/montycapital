// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/sass/app.sass"],
  serverMiddleware: [
    { path: '/api/geoip', handler: '~/server/api/geoip.js' },
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: "%s | MontyCapital",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "images/favicon-64x64.png",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "images/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "images/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          href: "images/apple-touch-icon-180x180.png",
        },
      ],
      meta: [
        { name: "theme-color", content: "#32393C" },
        { name: "format-detection", content: "telephone=no" },
        { name: "author", content: "MontyCapital" },
        { name: "og:site_name", content: "MontyCapital" },
        { name: "og:image:alt", content: "MontyCapital" },
        { name: "og:image:width", content: "1200" },
        { name: "og:image:height", content: "630" },
      ],
    },
    //pageTransition: { name: 'page', mode: 'out-in' }
  },
  pages: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-simple-sitemap",
    "nuxt-gtag",
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-swiper",
    "nuxt-aos",
  ],
  devServer: {
    host: "0.0.0.0",
    https: false,
  },
  // swiper: {
  //   // Swiper options
  //   //----------------------
  //   // prefix: 'Swiper',
  //   // styleLang: 'css',
  //   modules: ['effect-fade', 'pagination', 'thumbs', 'navigation', 'free-mode'], // all modules are imported by default
  // }
});