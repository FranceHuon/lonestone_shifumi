
import type { PropsWithChildren } from 'react'
import { Flex } from '@chakra-ui/react'

type GameRulesTagProps = PropsWithChildren

function GameRulesTag({ children, ...rest }: GameRulesTagProps) {
  return (
    <Flex
      flexDirection="row"
      margin={2}
      padding={3}
      backgroundColor="primary.navyBlue"
      width="100%"
      height={50}
      justifyContent="space-between"
      {...rest}
    >
      {children}
    </Flex>
  )
}

export default GameRulesTag
