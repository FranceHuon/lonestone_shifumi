import type { Choice } from '../utils/enums'
import { Flex } from '@chakra-ui/react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HumanAvatar, RobotAvatar } from '../assets/Avatars'
import Buttons from '../components/functional/Buttons'
import GameLayout from '../components/functional/GameLayout'
import Points from '../components/functional/Points'
import PointsSection from '../components/functional/PointsSection'
import StartGame from '../components/functional/StartGame'
import GameTitle from '../components/ui/GameTitle'
import PlayerName from '../components/ui/PlayerName'
import PlayerSection from '../components/ui/PlayerSection'
import { createRound, fetchOneGame } from '../services/api'
import { choices } from '../utils/choices'
import { getPoints } from '../utils/getPoints'

export const Route = createLazyFileRoute('/shifumi')({
  component: AppLayout,
})

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

export interface AppLayoutProps {
  isStarted: boolean
  playerName: string
}

function AppLayout({ isStarted, playerName }: AppLayoutProps) {
  const { t } = useTranslation('common')
  const [gamePlay, setGamePlay] = useState<PlayersChoices>([])
  const [timeLeft, setTimeLeft] = useState(4)
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [gameId, setGameId] = useState(0)

  const fetchGameId = async () => {
    try {
      const game = await fetchOneGame(1)
      setGameId(game.id)
      console.warn(game)
    }
    catch (error) {
      console.error('Erreur lors de la récupération de la partie:', error)
    }
  }
  fetchGameId()

  const getRandomChoice = (): Choice => {
    const values = Object.keys(choices)
    const randomIndex = Math.floor(Math.random() * values.length)
    const randomComputerChoice = values[randomIndex]
    return randomComputerChoice as Choice
  }

  const handleChoice = async (userChoice: Choice, gameId: number) => {
    if (gameId === null) {
      console.error('gameId est null, impossible de créer un round')
      return
    }

    const computerChoice = getRandomChoice()

    const newRound = {
      userChoice,
      computerChoice,
    }

    try {
      await createRound(gameId, newRound)
      console.warn('Round enregistré')
    }

    catch (error) {
      console.error('Erreur:', error)
    }
    setGamePlay([
      ...gamePlay,
      {
        userChoice,
        computerChoice,
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

      {!winner && (
        <Buttons
          gameId={gameId}
          handleUserChoice={(choice, gameId) => {
            handleChoice(choice, gameId)
          }}
        />
      )}
      {winner && (
        <StartGame
          buttonTitle={t('startAgain')}
          onClick={() => {
            setGamePlay([])
            setIsTimerActive(true)
          }}
          playerName={playerName}
        />
      )}
    </Flex>
  )
}
