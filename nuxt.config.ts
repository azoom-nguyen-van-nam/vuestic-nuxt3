export default defineNuxtConfig({
  css: ['~~/assets/css/main.css', 'vuestic-ui/dist/vuestic-ui.css'],
  build: {
    transpile: ['vuestic-ui']
  }
})
