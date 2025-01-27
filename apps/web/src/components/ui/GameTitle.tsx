import { Heading } from '@chakra-ui/react'

interface GameTitleProps {
  gameTitle: string
}

function GameTitle({ gameTitle }: GameTitleProps) {
  return (
    <Heading
      fontWeight={900}
      fontSize={36}
      color="color.lightBlue"
      margin={10}
    >
      {gameTitle}
    </Heading>
  )
}

export default GameTitle
