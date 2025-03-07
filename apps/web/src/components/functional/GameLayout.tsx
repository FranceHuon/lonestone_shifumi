import type { PlayersChoices } from './AppLayout'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import GameHistoric from './GameHistoric'
import GameRules from './GameRules'
import GameScene from './GameScene'

export interface GameLayoutProps {
  isStarted: boolean
  gamePlay: PlayersChoices
  winner: 'user' | 'computer' | null
  setGamePlay: React.Dispatch<React.SetStateAction<PlayersChoices>>
  timeLeft: number
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>
}
function GameLayout({
  isStarted,
  gamePlay,
  winner,
  setGamePlay,
  timeLeft,
  isTimerActive,
  setIsTimerActive,
  setTimeLeft,
}: GameLayoutProps) {
  // const lastGamePlay = gamePlay[gamePlay.length - 1];
  // const userLastGamePlay = lastGamePlay?.userChoice;
  // const computerLastGamePlay = lastGamePlay?.computerChoice;

  return (
    <Flex gap={8} justifyContent="center">
      <GameRules />
      <GameScene
        isStarted={isStarted}
        gamePlay={gamePlay}
        winner={winner}
        setGamePlay={setGamePlay}
        timeLeft={timeLeft}
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
        setTimeLeft={setTimeLeft}
      >
      </GameScene>

      <GameHistoric gamePlay={gamePlay} />
    </Flex>
  )
}

export default GameLayout
