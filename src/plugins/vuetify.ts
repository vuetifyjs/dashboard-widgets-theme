/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VSparkline } from 'vuetify/labs/VSparkline'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    ...components,
    VSparkline,
  },
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#33404D',
          secondary: '#FEA21E',
          accent: '#39C2B2',
        }
      },
      dark: {
        colors: {
          primary: '#FFFFFF',
          secondary: '#FEA21E',
          accent: '#39C2B2',
        }
      }
    }
  },
})
