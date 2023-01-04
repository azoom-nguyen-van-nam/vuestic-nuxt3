import { createVuestic, ColorConfig } from 'vuestic-ui'

export default defineNuxtPlugin((nuxtApp) => {
  const vuestic = createVuestic({
    config: {
      colors
    }
  })

  nuxtApp.vueApp.use(vuestic)
})

const colors: ColorConfig = {
  // @ts-ignore
  variables: {
    secondary: '#002c85',
    success: '#40e583',
    info: '#2c82e0',
    danger: '#e34b4a',
    warning: '#ffc200',
    gray: '#babfc2',
    dark: '#34495e'
  }
}
