import { Box, Heading } from '@chakra-ui/react'

function EndGameDisplay() {
  return (
    <Box
      width="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Heading color="secondary.lightBlue">Fin de la partie !</Heading>
    </Box>
  )
}

export default EndGameDisplay
