import vuestic from './vuestic.config'

export default defineNuxtConfig({
  css: ['vuestic-ui/dist/styles/index.css'],
  modules: ['@vuestic/nuxt'],
  vuestic
})
