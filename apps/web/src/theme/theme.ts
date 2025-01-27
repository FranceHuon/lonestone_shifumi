import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        color: {
          nightBlue: { value: '#0a0f26' },
          darkBlue: { value: '#212849' },
          hardBlue: { value: '#0440a3' },
          navyBlue: { value: '#131935' },
          electricBlue: { value: '#0158e6' },
          lightBlue: { value: '#c6cfff' },
          darkRed: { value: '#ad2b2b' },
          red: { value: '#eb5757' },
          green: { value: '#01d09e' },
          white: { value: '#ffffff' },
        }
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
