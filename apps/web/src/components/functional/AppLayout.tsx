'use client'
import type { Choice } from '../../utils/enums'
import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { choices } from '../../utils/choices'
import { getPoints } from '../../utils/getPoints'
import GameTitle from '../ui/GameTitle'
import PlayerName from '../ui/PlayerName'
import PlayerSection from '../ui/PlayerSection'
import Buttons from './Buttons'
import ComputerPoints from './ComputerPoints'
import GameLayout from './GameLayout'
import PlayerPoints from './PlayerPoints'

import StartGame from './StartGame'
import RestartGame from './ReStartGame'
import { HumanAvatar, RobotAvatar } from '../../assets/Avatars'
import { useTranslation } from 'react-i18next'

export type PlayersChoices = {
  userChoice: Choice
  computerChoice: Choice
}[]

function handleWinner(userPoints: number, computerPoints: number) {
  if (userPoints >= 5) {
    return 'user'
  }
  else if (computerPoints >= 5) {
    return 'computer'
  }
  else {
    return null
  }
}

function AppLayout() {
  const { t } = useTranslation('common')
  const [isStarted, setIsStarted] = useState(false)
  const [gamePlay, setGamePlay] = useState<PlayersChoices>([])
  const [timeLeft, setTimeLeft] = useState(4)
  const [isTimerActive, setIsTimerActive] = useState(false)

  const getRandomChoice = (): Choice => {
    const values = Object.keys(choices)
    const randomIndex = Math.floor(Math.random() * values.length)
    const randomComputerChoice = values[randomIndex]
    return randomComputerChoice as Choice
  }

  const handleChoice = (choice: Choice) => {
    setGamePlay([
      ...gamePlay,
      {
        userChoice: choice,
        computerChoice: getRandomChoice(),
      },
    ])
    setIsTimerActive(false)
    setTimeLeft(4)
    setTimeout(() => {
      setIsTimerActive(true)
    }, 3000)
  }

  const points = getPoints(gamePlay)

  const winner = handleWinner(points.userPoints, points.computerPoints)

  return (
    <Flex
      gap={8}
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <GameTitle gameTitle="Shifumi !"></GameTitle>

      <Box width={710} display="flex">
        <PlayerSection playerAvatar={<HumanAvatar />}>
          <PlayerName name={t('user')}></PlayerName>
          <PlayerPoints score={points.userPoints} />
        </PlayerSection>

        <Box display="flex">
          <PlayerSection
            flexDirection="row-reverse"
            playerAvatar={<RobotAvatar />}
          >
            <Box display="flex" justifyContent="flex-end">
              <PlayerName name={t('computer')} textAlign="end"></PlayerName>
            </Box>

            <ComputerPoints score={points.computerPoints} />
          </PlayerSection>
        </Box>
      </Box>

      <GameLayout
        isStarted={isStarted}
        gamePlay={gamePlay}
        winner={winner}
        setGamePlay={setGamePlay}
        timeLeft={timeLeft}
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
        setTimeLeft={setTimeLeft}
      />

      <StartGame
        onClick={() => {
          setIsStarted(true)
          setIsTimerActive(true)
        }}
        isStarted={isStarted}
      />

      {isStarted && !winner && (
        <Buttons
          handleUserChoice={(choice) => {
            handleChoice(choice)
          }}
        />
      )}
      {winner && (
        <RestartGame
          onClick={() => {
            setGamePlay([])
            setIsTimerActive(true)
          }}
        />
      )}
    </Flex>
  )
}

export default AppLayout

