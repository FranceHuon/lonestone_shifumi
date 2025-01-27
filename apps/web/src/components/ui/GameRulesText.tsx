import { Text } from '@chakra-ui/react'

interface GameRulesTextProps {
  rule: string
}

function GameRulesText({ rule }: GameRulesTextProps) {
  return (
    <Text padding={2} color="color.lightBlue">
      {rule}
    </Text>
  )
}

export default GameRulesText
