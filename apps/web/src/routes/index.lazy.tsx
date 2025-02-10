import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PlayerInput from '../components/functional/PlayerInput'
import StartGame from '../components/functional/StartGame'
import Layout from '../components/ui/Layout'

export const Route = createLazyFileRoute('/')({
  component: Welcome,
})

function Welcome() {
  const { t } = useTranslation('common')
  const [isStarted, setIsStarted] = useState(false)
  const [playerName, setPlayerName] = useState(() => {
    return localStorage.getItem('playerName') || ''
  })
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('playerName', playerName)
  }, [playerName])
  return (
    <Layout>
      {!isStarted && (
        <PlayerInput playerName={playerName} setPlayerName={setPlayerName} />
      )}
      <StartGame
        buttonTitle={t('start')}
        onClick={() => {
          setIsStarted(true)
          navigate({
            to: '/shifumi',
          })
        }}
        isStarted={isStarted}
      />
    </Layout>
  )
}
