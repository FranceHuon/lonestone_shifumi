import type { Choice, CreateRoundDto, GameDto } from '@shifumi/dtos'
import { Flex, Text } from '@chakra-ui/react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HumanAvatar, RobotAvatar } from '../assets/Avatars'
import Buttons from '../components/functional/Buttons'
import GameHistoric from '../components/functional/GameHistoric'
import GameRules from '../components/functional/GameRules'
import GameScene from '../components/functional/GameScene'
import Points from '../components/functional/Points'
import BasicButton from '../components/ui/Button'
import Layout from '../components/ui/Layout'
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

export interface AppLayoutProps {
  // playerOneName: string | undefined
  // playerTwoName: string | undefined
}

function AppLayout() {
  const { gameId } = Route.useParams()
  const { playerOneName, playerTwoName } = Route.useSearch()
  const gameIdAsNumber = Number(gameId)

  function handleWinner(playerOnePoints: number, playerTwoPoints: number) {
    if (playerOnePoints >= 5) {
      return playerOneName
    }
    else if (playerTwoPoints >= 5) {
      return playerTwoName
    }
    else {
      return null
    }
  }

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

  const players = gameData?.players
  players?.map((name) => {
    return {
      playerOneName: name,
      playerTwoName: name,
    }
  })

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

    try {
      const newGame = await createGame (playerOneName, playerTwoName)
      navigate({
        to: '/shifumi/$gameId',
        params: {
          gameId: newGame.id.toString(),
        },
        search: { playerOneName, playerTwoName },
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
        gap={4}
      >
        <Flex width={710}>
          <PlayerSection playerAvatar={<HumanAvatar />}>
            <Text color="color.lightBlue" fontWeight={900} fontSize={24}>{playerOneName}</Text>
            <Points score={points.userPoints} />
          </PlayerSection>
          <PlayerSection
            flexDirection="row-reverse"
            playerAvatar={<RobotAvatar />}
          >
            <Text color="color.lightBlue" fontWeight={900} fontSize={24} textAlign="end" alignSelf="end">
              {playerTwoName}
            </Text>
            <Points score={points.computerPoints} />
          </PlayerSection>
        </Flex>
        <Flex gap={8} justifyContent="center">
          <GameRules />
          <GameScene
            gamePlay={gamePlay}
            winner={winner}
            setGamePlay={setGamePlay}
            timeLeft={timeLeft}
            isTimerActive={isTimerActive}
            setIsTimerActive={setIsTimerActive}
            setTimeLeft={setTimeLeft}

          />
          <GameHistoric gamePlay={gamePlay} />
        </Flex>

      </Flex>

      {!winner && (
        <Buttons
          handleUserChoice={(choice) => {
            handleChoice(choice)
          }}
        />
      )}
      {winner && (
        <BasicButton
          buttonTitle={t('startAgain')}
          onClick={handleStartAgain}
        />
      )}
    </Layout>
  )
}
