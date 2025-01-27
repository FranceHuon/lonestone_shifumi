import type { TextProps } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

type PlayerNameProps = {
  name: string
} & TextProps
function PlayerName({ name }: PlayerNameProps) {
  return (
    <Text color="color.lightBlue" fontWeight={900} fontSize={24}>
      {name || 'Player'}
    </Text>
  )
}

export default PlayerName
