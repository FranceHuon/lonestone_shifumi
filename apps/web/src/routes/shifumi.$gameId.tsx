import type { CreateRoundDto, GameDto } from '@shifumi/dtos'
import type { Choice } from '../utils/enums'
import { Flex } from '@chakra-ui/react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
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
import { createGame, createRound, fetchAllRounds, fetchOneGame } from '../services/api'
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
  playerName: string | undefined
}

function AppLayout() {
  const { gameId } = Route.useParams()
  const gameIdAsNumber = Number(gameId)

  const { t } = useTranslation('common')
  const [gamePlay, setGamePlay] = useState<PlayersChoices>([])
  const [timeLeft, setTimeLeft] = useState(4)
  const [isTimerActive, setIsTimerActive] = useState(true)
  const [gameData, setGameData] = useState<GameDto | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const game = await fetchOneGame(gameIdAsNumber)
        const rounds = await fetchAllRounds(gameIdAsNumber)
        const playersChoices = rounds.map((round) => {
          return {
            userChoice: round.playerTwoChoice as Choice,
            computerChoice: round.playerOneChoice as Choice,
          }
        })
        setGamePlay(playersChoices)
        setGameData(game)
      }
      catch (error) {
        console.error('Erreur lors de la récupération des données du jeu:', error)
      }
    }
    if (gameIdAsNumber) {
      fetchGame()
    }
  }, [gameIdAsNumber])

  const playerName = gameData?.playerTwo

  const getRandomChoice = (): Choice => {
    const values = Object.keys(choices)
    const randomIndex = Math.floor(Math.random() * values.length)
    const randomComputerChoice = values[randomIndex]
    return randomComputerChoice as Choice
  }

  const newRound = async (playerOneChoice: Choice, playerTwoChoice: Choice) => {
    const roundData: CreateRoundDto = {
      gameId: gameIdAsNumber,
      playerOneChoice,
      playerTwoChoice,
    }

    try {
      await createRound(roundData)
    }
    catch (error) {
      console.error (error)
    }
  }

  const handleChoice = async (userChoice: Choice) => {
    const computerChoice = getRandomChoice()
    newRound(userChoice, computerChoice)

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

  async function handleStartAgain() {
    setGamePlay([])
    setIsTimerActive(true)
    if (!playerName) {
      throw new Error('Please enter your name!')
    }

    try {
      const newGame = await createGame({ playerTwoName: playerName })
      console.warn('New game:', newGame)
      navigate({
        to: '/shifumi/$gameId',
        params: {
          gameId: newGame.id.toString(),
        },
      })
    }
    catch (error) {
      console.error(error)
    }
  }

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
          playerName={playerName}
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
          onClick={handleStartAgain}
        />
      )}
    </Layout>
  )
}
