import type { BoxProps } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'
import { Box, Heading } from '@chakra-ui/react'

type BoxLayoutProps = PropsWithChildren<{
  width?: number
  title: string
}> &
BoxProps

function BoxLayout({ width, children, title, ...rest }: BoxLayoutProps) {
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
      <Box
        borderRadius="full"
        opacity={1}
        height={35}
        padding={4}
        width="100%"
        bg="color.nightBlue"
        display="flex"
        alignItems="center"
      >
        <Heading
          fontWeight={900}
          fontSize={16}
          color="color.lightBlue"
          textAlign="center"
          width="100%"
          {...rest}
        >
          {title}
        </Heading>
      </Box>
      {children}
    </Box>
  )
}

export default BoxLayout
