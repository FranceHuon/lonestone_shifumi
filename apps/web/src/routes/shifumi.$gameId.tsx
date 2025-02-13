import type { Choice } from '../utils/enums'
import { Flex } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HumanAvatar, RobotAvatar } from '../assets/Avatars'
import Buttons from '../components/functional/Buttons'
import GameLayout from '../components/functional/GameLayout'
import Points from '../components/functional/Points'
import PointsSection from '../components/functional/PointsSection'
import StartGame from '../components/functional/StartGame'
import Layout from '../components/ui/Layout'
import PlayerName from '../components/ui/PlayerName'
import PlayerSection from '../components/ui/PlayerSection'
import { choices } from '../utils/choices'
import { getPoints } from '../utils/getPoints'

export const Route = createFileRoute('/shifumi/$gameId')({
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
  playerName: string
}

function AppLayout() {
  const { gameId } = Route.useParams()
  console.warn('Game id is:', gameId)

  const { t } = useTranslation('common')
  const [gamePlay, setGamePlay] = useState<PlayersChoices>([])
  const [timeLeft, setTimeLeft] = useState(4)
  const [isTimerActive, setIsTimerActive] = useState(true)

  const playerName = localStorage.getItem('playerName')

  const getRandomChoice = (): Choice => {
    const values = Object.keys(choices)
    const randomIndex = Math.floor(Math.random() * values.length)
    const randomComputerChoice = values[randomIndex]
    return randomComputerChoice as Choice
  }

  const handleChoice = async (userChoice: Choice) => {
    const computerChoice = getRandomChoice()

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
    <Layout>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width={710}
      >
        <PointsSection>
          <PlayerSection playerAvatar={<HumanAvatar />}>
            <PlayerName>{playerName}</PlayerName>
            <Points score={points.userPoints} />
          </PlayerSection>
          <PlayerSection
            flexDirection="row-reverse"
            playerAvatar={<RobotAvatar />}
          >
            <PlayerName textAlign="end" alignSelf="end">
              {t('computer')}
            </PlayerName>
            <Points score={points.computerPoints} />
          </PlayerSection>
        </PointsSection>
        <GameLayout
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
          handleUserChoice={(choice) => {
            handleChoice(choice)
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
        />
      )}
    </Layout>
  )
}
