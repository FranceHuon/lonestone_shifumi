import type { Choice } from '../../utils/enums'
import { Box, Heading } from '@chakra-ui/react'
import { getResult } from '../../utils/getResult'

interface ResultScreenProps {
  userLastGamePlay: Choice
  computerLastGamePlay: Choice
}

function ResultScreen({
  userLastGamePlay,
  computerLastGamePlay,
}: ResultScreenProps) {
  const roundResult = getResult(userLastGamePlay, computerLastGamePlay)
  console.log(roundResult)

  console.log(roundResult)

  return (
    <Box width="full">
      <Heading
        fontWeight={900}
        fontSize={34}
        color="color.lightBlue"
        margin={7}
        textAlign="center"
      >
        {roundResult}
      </Heading>
    </Box>
  )
}

export default ResultScreen
