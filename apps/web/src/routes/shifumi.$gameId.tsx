import type { Choice, CreateChoiceDto, GameDto, PlayersChoices } from '@shifumi/dtos'
import { Flex, Text } from '@chakra-ui/react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
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
import { createGame, fetchAllRounds, fetchOneGame, makeChoice } from '../services/api'
import { getPoints } from '../utils/getPoints'

export const Route = createFileRoute('/shifumi/$gameId')({
  component: AppLayout,
})

function AppLayout() {
  const { gameId } = Route.useParams()
  const { playerOneName, playerTwoName } = Route.useSearch()
  const gameIdAsNumber = Number(gameId)

  const { data, isLoading } = useQuery({ queryKey: ['game', gameIdAsNumber], queryFn: () => fetchOneGame(gameIdAsNumber) })
  console.warn('data : ', data)

  const player = data?.players.find(player => !player.isNpc)
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
  // const [timeLeft, setTimeLeft] = useState(4)
  // const [isTimerActive, setIsTimerActive] = useState(true)
  const [gameData, setGameData] = useState<GameDto | null>(null)
  const navigate = useNavigate()

  useEffect (() => {
    const fetchGame = async () => {
      try {
        const game = await fetchOneGame(gameIdAsNumber)
        const rounds = await fetchAllRounds((gameIdAsNumber))
        setGameData(game)
        setGamePlay(
          rounds.map(round => ({
            playerOneChoice: round.playerOneChoice,
            playerTwoChoice: round.playerTwoChoice,
          })),
        )
      }
      catch (error) {
        console.error('Erreur lors de la récupération des données du jeu:', error)
      }
    }

    if (gameIdAsNumber) {
      fetchGame()
    }
  }, [gameIdAsNumber])

  const queryClient = useQueryClient()
  const handleChoice = async (choice: Choice) => {
    if (!player)
      return
    try {
      const newChoice = await makeChoice({
        playerId: player.id,
        choice,
        gameId: gameIdAsNumber,
      })
      queryClient.invalidateQueries(['game', gameIdAsNumber])
    }
    catch (error) {
      console.error ('Erreur lors de la création du round:', error)
    }
  }

  const points = getPoints(gamePlay)

  const winner = handleWinner(points.playerOnePoints, points.playerTwoPoints)

  const handleStartAgain = async () => {
    setGamePlay([])
    try {
      if (gameData) {
        const newGame = await createGame(gameData.players[0], gameData.players[1])
        navigate({ to: `Shifumi/${newGame.id}` })
      }
    }
    catch (error) {
      console.error('Erreur lors de la création d\'un nouveau jeu:', error)
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
            <Points score={points.playerOnePoints} />
          </PlayerSection>
          <PlayerSection
            flexDirection="row-reverse"
            playerAvatar={<RobotAvatar />}
          >
            <Text color="color.lightBlue" fontWeight={900} fontSize={24} textAlign="end" alignSelf="end">
              {playerTwoName}
            </Text>
            <Points score={points.playerTwoPoints} />
          </PlayerSection>
        </Flex>
        <Flex gap={8} justifyContent="center">
          <GameRules />
          <GameScene
            gamePlay={gamePlay}
            winner={winner}
            setGamePlay={setGamePlay}
            // timeLeft={timeLeft}
            // isTimerActive={isTimerActive}
            // setIsTimerActive={setIsTimerActive}
            // setTimeLeft={setTimeLeft}

          />
          <GameHistoric gamePlay={gamePlay} />
        </Flex>

      </Flex>

      {!winner && (
        <Buttons
          handleUserChoice={handleChoice}
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
