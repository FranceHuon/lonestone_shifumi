import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
				heading: { value: `'Overpass', sans-serif` },
				body: { value: `'Chivo', sans-serif` },
			},
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
    textStyles: {
      global: {
        h1: {
          fontSize: '72px',
          fontWeight: '900',
          textAlign: 'center',
        },
        h2: {
          fontSize: '36px',
          fontWeight: '900',
          textAlign: 'center',
        },
        h3: {
          fontSize: '24px',
          fontWeight: '900',
          textAlign: 'right',
        },
        h4: {
          fontSize: '24px',
          fontWeight: 'normal',
          fontFamily: 'Chivo, sans-serif',
          textAlign: 'center',
        },
        h5: {
          fontSize: '16px',
          fontWeight: '900',
          textAlign: 'center',
        },
        p: {
          fontSize: '12px',
          fontWeight: 'normal',
          fontFamily: 'Chivo, sans-serif',
          textAlign: 'center',
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
