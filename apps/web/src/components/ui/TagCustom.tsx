import type { PropsWithChildren } from 'react'
import { Flex } from '@chakra-ui/react'

type TagCustomProps = PropsWithChildren<{
  backgroundColor: string
  key: number
}> 

function TagCustom({
  backgroundColor,
  key,
  children,
  ...rest
}: TagCustomProps) {
  return (
    <Flex
      key={key}
      display="flex"
      flexDirection="row"
      margin={1}
      padding={2}
      backgroundColor={backgroundColor}
      width="100%"
      height={50}
      justifyContent="space-between"
      {...rest}
    >
      {children}
    </Flex>
  )
}

export default TagCustom
