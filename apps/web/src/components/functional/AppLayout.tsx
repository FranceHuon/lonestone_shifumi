'use client'
import type { Choice } from '../../utils/enums'
import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HumanAvatar, RobotAvatar } from '../../assets/Avatars'
import { choices } from '../../utils/choices'
import { getPoints } from '../../utils/getPoints'
import GameTitle from '../ui/GameTitle'
import PlayerName from '../ui/PlayerName'
import PlayerSection from '../ui/PlayerSection'
import Buttons from './Buttons'
import GameLayout from './GameLayout'
import PlayerInput from './PlayerInput'
import Points from './Points'
import PointsSection from './PointsSection'
import RestartGame from './ReStartGame'
import StartGame from './StartGame'

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
  const [playerName, setPlayerName] = useState(() => {
    return localStorage.getItem('playerName') || ''
  })
  console.warn(localStorage)

  useEffect(() => {
    localStorage.setItem('playerName', playerName)
  }, [playerName])
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
      width="100%"
      minHeight="100vh"
      backgroundColor="color.darkBlue"
    >
      <GameTitle gameTitle="Shifumi !"></GameTitle>

      {!isStarted && (
        <PlayerInput playerName={playerName} setPlayerName={setPlayerName} />
      )}
      {isStarted && (
        <Flex flexDirection="column" justifyContent="center" alignItems="center" width={710}>
          <PointsSection>
            <PlayerSection playerAvatar={<HumanAvatar />}>
              <PlayerName name={playerName}></PlayerName>
              <Points score={points.userPoints} />
            </PlayerSection>
            <PlayerSection
              flexDirection="row-reverse"
              playerAvatar={<RobotAvatar />}
            >
              <PlayerName name={t('computer')} textAlign="end"></PlayerName>
              <Points score={points.computerPoints} />
            </PlayerSection>
          </PointsSection>
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
        </Flex>
      )}

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
