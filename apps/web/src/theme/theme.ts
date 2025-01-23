import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
