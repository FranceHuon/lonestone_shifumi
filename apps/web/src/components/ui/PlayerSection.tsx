import type { BoxProps } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'
import { Box } from '@chakra-ui/react'

type PlayerSectionProps = PropsWithChildren<
  {
    playerAvatar: React.ReactElement
  } & BoxProps
>
function PlayerSection({
  playerAvatar,
  children,
  ...rest
}: PlayerSectionProps) {
  return (
    <Box
      display="flex"
      width="100%"
      height="100%"
      alignContent="flex-end"
      {...rest}
    >
      <Box
        display="flex"
        height="100%"
      >
        {playerAvatar}
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="flex-start"
      >
        {children}
      </Box>
    </Box>
  )
}

export default PlayerSection
