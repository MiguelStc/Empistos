import tailwindcss from "@tailwindcss/vite";
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module',
  ],
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: '.app-dark',
          cssLayer: false
        }
      }
    }
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css',
    '~/assets/css/styles.css'


  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

});