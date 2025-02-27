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
  const [playerName, setPlayerName] = useState('')
  const navigate = useNavigate()

  async function handleStartGame() {
    if (!playerName) {
      throw new Error('Please enter your name!')
    }

    try {
      const player = await createPlayer(playerName)
      console.warn('New player:', player)

      const newGame = await createGame({ playerTwoName: player.name })
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
      <PlayerInput playerName={playerName} setPlayerName={setPlayerName} />
      <BasicButton
        buttonTitle={t('start')}
        onClick={handleStartGame}
      />
    </Layout>
  )
}
