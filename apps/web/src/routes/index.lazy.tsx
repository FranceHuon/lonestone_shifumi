import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PlayerInput from '../components/functional/PlayerInput'
import BasicButton from '../components/ui/Button'
import Layout from '../components/ui/Layout'
import { createGame, createPlayer } from '../services/api'

export const Route = createLazyFileRoute('/')({
  component: Welcome,
})

function Welcome() {
  const { t } = useTranslation('common')
  const [playerOneName, setPlayerOneName] = useState('')
  const navigate = useNavigate()

  async function handleStartGame() {
    try {
      const playerOne = await createPlayer(playerOneName)

      const newGame = await createGame(playerOne.name)
      console.warn('New game:', newGame)
      navigate({
        to: '/shifumi/$gameId',
        params: {
          gameId: newGame.id.toString(),
        },
        search: {
          playerOneName: playerOne.name,
        },
      })
    }
    catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout>
      <PlayerInput playerName={playerOneName} setPlayerName={setPlayerOneName} />
      <BasicButton
        buttonTitle={t('start')}
        onClick={handleStartGame}
      />
    </Layout>
  )
}
