// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: false,
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "하트버튼 애니메이션",
      htmlAttrs: {
        lang: "ko",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no, viewport-fit-cover",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          type: "text/javascript",
          src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
        },
      ],
    },
  },
})
