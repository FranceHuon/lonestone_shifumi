'use client'
import type { PlayersChoices } from './AppLayout'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Choice } from '../../utils/enums'

interface TimerProps {
  setGamePlay: React.Dispatch<React.SetStateAction<PlayersChoices>>
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>
  timeLeft: number
  gamePlay: PlayersChoices
}
function Timer({
  setGamePlay,
  isTimerActive,
  setIsTimerActive,
  setTimeLeft,
  timeLeft,
  gamePlay,
}: TimerProps) {
  useEffect(() => {
    if (!isTimerActive)
      return

    const timer = setInterval(() => {
      // setTimeLeft((prevTime) => (prevTime ? prevTime - 1 : 3));
      setTimeLeft(prevTime => prevTime - 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [isTimerActive, setTimeLeft])

  useEffect(() => {
    if (timeLeft === 0) {
      const handleForfeit = () => {
        setGamePlay([
          ...gamePlay,
          {
            userChoice: Choice.LEAF,
            computerChoice: Choice.SCISSORS,
          },
        ])
      }

      handleForfeit()
      setIsTimerActive(false)
      setTimeLeft(4)
      setTimeout(() => {
        setIsTimerActive(true)
      }, 3000)
    }
  }, [timeLeft, setTimeLeft, gamePlay, setGamePlay, setIsTimerActive])

  return (
    <Flex
      alignItems="center"
      alignContent="center"
      justifyContent="center"
      color="secondary.lightBlue"
      width="full"
    >
      {!gamePlay.length && timeLeft > 3
        ? (
            <Box>
              <Heading>Jouez !</Heading>
            </Box>
          )
        : (
            <Box
              display="flex"
              flexDirection="column"
              color="secondary.lightBlue"
              alignContent="center"
              alignItems="center"
            >
              <Heading>{timeLeft}</Heading>
              <Heading>Choisissez votre coup</Heading>
            </Box>
          )}
    </Flex>
  )
}

export default Timer
