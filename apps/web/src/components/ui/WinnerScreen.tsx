import { Box, Heading } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

interface WinnerScreenProps {
  winner: 'user' | 'computer' | null
  playerName: string | undefined
}

function WinnerScreen({ winner, playerName }: WinnerScreenProps) {
  const { t } = useTranslation('common')
  let winnerName
  if (winner === 'user') {
    winnerName = playerName
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
        {t('winner')}
        {winnerName}

      </Heading>
    </Box>
  )
}

export default WinnerScreen
