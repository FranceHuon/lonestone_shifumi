import type { BoxProps } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'
import { Box } from '@chakra-ui/react'

type BoxLayoutProps = PropsWithChildren<{
  width?: number
}> &
BoxProps

function BoxLayout({ width, children, ...rest }: BoxLayoutProps) {
  return (
    <Box
      display="flex"
      flexDir="column"
      rounded="2xl"
      bg="color.navyBlue"
      height={420}
      width={width}
      padding={5}
      alignItems="center"
      {...rest}
    >
      {children}
    </Box>
  )
}

export default BoxLayout
