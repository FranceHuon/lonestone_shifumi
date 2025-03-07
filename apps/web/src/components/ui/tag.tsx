import type { PropsWithChildren } from 'react'
import { Flex } from '@chakra-ui/react'

export type TagProps = PropsWithChildren<
  {
    color?: string
    height?: number
    margin?: number
    padding?: number
  }
>

function Tag({ color, height, margin, padding, children, ...rest }: TagProps) {
  return (
    <Flex
      flexDirection="row"
      margin={margin}
      padding={padding}
      backgroundColor={color}
      width="100%"
      height={height}
      justifyContent="space-between"
      {...rest}
    >
      {children}
    </Flex>
  )
}
export default Tag
