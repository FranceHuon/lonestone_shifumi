import type { TextProps } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

type PlayerNameProps = {
  name: string
} & TextProps
function PlayerName({ name }: PlayerNameProps) {
  return (
    <Text color="secondary.lightBlue" fontWeight={900} fontSize={24}>
      {name}
    </Text>
  )
}

export default PlayerName
