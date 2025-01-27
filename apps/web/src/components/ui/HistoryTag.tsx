import type { PropsWithChildren } from 'react'
import { Flex } from '@chakra-ui/react'

type HistoryTagProps = PropsWithChildren

function HistoryTag({ children }: HistoryTagProps) {
  return (
    <Flex
      margin={1}
      padding={2}
      backgroundColor="color.nightBlue"
      width="100%"
      height="20%"
      justifyContent="space-between"
    >
      {children}
    </Flex>
  )
}

export default HistoryTag
