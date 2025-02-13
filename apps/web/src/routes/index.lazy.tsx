import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PlayerInput from '../components/functional/PlayerInput'
import StartGame from '../components/functional/StartGame'
import Layout from '../components/ui/Layout'
import { createGame } from '../services/api'

export const Route = createLazyFileRoute('/')({
  component: Welcome,
})

function Welcome() {
  const { t } = useTranslation('common')
  const [playerName, setPlayerName] = useState(localStorage.getItem('playerName') ?? '')
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (playerName) {
      localStorage.setItem('playerName', playerName)
    }
  }, [playerName])

  const handleStartGame = async () => {
    setIsLoading(true)
    const newGame = await createGame({
      playerTwoName: playerName,
    })
    navigate({
      to: '/shifumi/$gameId',
      params: {
        gameId: newGame.id.toString(),
      },
    })
    setIsLoading(false)
  }

  return (
    <Layout>
      <PlayerInput playerName={playerName} setPlayerName={setPlayerName} />
      <StartGame
        buttonTitle={t('start')}
        onClick={handleStartGame}
      />
    </Layout>
  )
}
