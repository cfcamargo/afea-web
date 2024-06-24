// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','~/assets/css/hamburguer.css'],
  components: [{path: '@/components', pathPrefix:false}],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image", "@nuxt/fonts", "nuxt-swiper"],
  fonts: {
    families : [
      { name: 'Poppins', src: 'https://fonts.google.com/share?selection.family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900'},
      { name: 'Roboto', src: 'https://fonts.google.com/share?selection.family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900'}
    ],
  },
  runtimeConfig: {
    apiKey: process.env.API_KEY,
    spreadsheetId: process.env.SPREADSHEET_ID
  },
})
