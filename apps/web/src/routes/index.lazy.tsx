import { Flex } from '@chakra-ui/react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PlayerInput from '../components/functional/PlayerInput'
import StartGame from '../components/functional/StartGame'
import GameTitle from '../components/ui/GameTitle'

export const Route = createLazyFileRoute('/')({
  component: Welcome,
})

function Welcome() {
  const { t } = useTranslation('common')
  const [isStarted, setIsStarted] = useState(false)
  const [playerName, setPlayerName] = useState(() => {
    return localStorage.getItem('playerName') || ''
  })

  useEffect(() => {
    localStorage.setItem('playerName', playerName)
  }, [playerName])
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
      <StartGame
        buttonTitle={t('start')}
        onClick={() => {
          setIsStarted(true)
          // setIsTimerActive(true)
        }}
        isStarted={isStarted}
      />
    </Flex>
  )
}
