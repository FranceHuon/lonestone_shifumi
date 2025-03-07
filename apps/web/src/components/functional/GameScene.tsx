import type { PlayersChoices } from '@shifumi/dtos'
import { Box, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { choices } from '../../utils/choices'
import BoxLayout from '../ui/BoxLayout'
import SymbolCard from '../ui/SymbolCard'
import WinnerScreen from '../ui/WinnerScreen'
import ResultScreen from './ResultScreen'
// import Timer from './Timer'

interface GameSceneProps {
  gamePlay: PlayersChoices
  winner: string
  // timeLeft: number
  setGamePlay: React.Dispatch<React.SetStateAction<PlayersChoices>>
  // isTimerActive: boolean
  // setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
  // setTimeLeft: React.Dispatch<React.SetStateAction<number>>
}

function GameScene({
  gamePlay,
  winner,
  // setGamePlay,
  // timeLeft,
  // isTimerActive,
  // setIsTimerActive,
  // setTimeLeft,
}: GameSceneProps) {
  const { t } = useTranslation('common')
  const lastGamePlay = gamePlay[gamePlay.length - 1]
  const userLastGamePlay = lastGamePlay?.playerOneChoice
  const computerLastGamePlay = lastGamePlay?.playerTwoChoice
  const roundNumber = gamePlay.length

  // useEffect(() => {
  //   if (winner) {
  //     setIsTimerActive(false)
  //   }
  // }, [winner, setIsTimerActive])

  return (
    <BoxLayout width={710} title={`${t('round')} ${roundNumber}`}>
      <Flex width="full" flexGrow={1}>
        {
        // isTimerActive
        // &&
          // !winner && (
          // <Timer
          //   setGamePlay={setGamePlay}
          // isTimerActive={isTimerActive}
          // setIsTimerActive={setIsTimerActive}
          // setTimeLeft={setTimeLeft}
          // timeLeft={timeLeft}
          //   gamePlay={gamePlay}
          // />
          // )
        }
        {!winner && computerLastGamePlay && userLastGamePlay && (
        // !isTimerActive
        // &&
        // (
          <Box
            display="flex"
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              display="flex"
              width="50%"
              justifyContent="center"
              alignItems="center"
            >
              <SymbolCard
                borderColor="color.electricBlue"
                color="color.hardBlue"
                backgroundColor="color.hardBlue"
                symbolName={choices[userLastGamePlay].name}
                illu={choices[userLastGamePlay].blueIllu}
              />
            </Box>
            <ResultScreen
              userLastGamePlay={userLastGamePlay}
              computerLastGamePlay={computerLastGamePlay}
            >
            </ResultScreen>
            <Box
              width="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <SymbolCard
                borderColor="color.red"
                color="color.red"
                backgroundColor="color.darkRed"
                symbolName={choices[computerLastGamePlay].name}
                illu={choices[computerLastGamePlay].redIllu}
              >
              </SymbolCard>
            </Box>
          </Box>
        )}
        {winner && <WinnerScreen winner={winner} />}
      </Flex>
    </BoxLayout>
  )
}

export default GameScene
