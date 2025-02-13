import type { TextProps } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'
import { Text } from '@chakra-ui/react'

type PlayerNameProps = PropsWithChildren & TextProps
function PlayerName({ children }: PlayerNameProps) {
  return (
    <Text color="color.lightBlue" fontWeight={900} fontSize={24}>
      {children}
    </Text>
  )
}

export default PlayerName
