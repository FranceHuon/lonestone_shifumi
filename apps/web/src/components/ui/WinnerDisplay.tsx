import { Box, Heading } from '@chakra-ui/react'

interface WinnerDisplayProps {
  winner: 'user' | 'computer' | null
}

function WinnerDisplay({ winner }: WinnerDisplayProps) {
  let winnerName
  if (winner === 'user') {
    winnerName = 'vous'
  }
  else {
    winnerName = 'ordinateur'
  }

  return (
    <Box
      width="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Heading color="color.lightBlue">
        {winnerName}
        {' '}
        : vainqueur!
      </Heading>
    </Box>
  )
}

export default WinnerDisplay
