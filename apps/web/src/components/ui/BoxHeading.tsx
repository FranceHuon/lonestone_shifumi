import type { HeadingProps } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'
import { Box, Heading } from '@chakra-ui/react'

type BoxHeadingProps = PropsWithChildren & HeadingProps

function BoxHeading({ children, ...rest }: BoxHeadingProps) {
  return (
    <Box
      borderRadius="full"
      opacity={1}
      height={35}
      padding={4}
      width="100%"
      bg="primary.nightBlue"
    >
      <Heading
        fontWeight={900}
        fontSize={16}
        color="secondary.lightBlue"
        textAlign="center"
        width="100%"
        {...rest}
      >
        {children}
      </Heading>
    </Box>

  )
}

export default BoxHeading
