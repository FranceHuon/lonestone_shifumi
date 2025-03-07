import { Box, Heading } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

interface WinnerScreenProps {
  winner: string
}

function WinnerScreen({ winner }: WinnerScreenProps) {
  const { t } = useTranslation('common')
  return (
    <Box
      width="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Heading color="color.lightBlue">
        {t('winner')}
        {winner}

      </Heading>
    </Box>
  )
}

export default WinnerScreen
