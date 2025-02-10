import type { PlayersChoices } from '../../routes/shifumi.lazy'
import { Box, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { choices } from '../../utils/choices'
import BoxHeading from '../ui/BoxHeading'
import BoxLayout from '../ui/BoxLayout'
import EndGameDisplay from '../ui/EndGameDisplay'
import SymbolCard from '../ui/SymbolCard'
import ResultScreen from './ResultScreen'
import Timer from './Timer'

interface GameSceneProps {
  gamePlay: PlayersChoices
  winner: 'user' | 'computer' | null
  timeLeft: number
  setGamePlay: React.Dispatch<React.SetStateAction<PlayersChoices>>
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>
}

function GameScene({
  gamePlay,
  winner,
  setGamePlay,
  timeLeft,
  isTimerActive,
  setIsTimerActive,
  setTimeLeft,
}: GameSceneProps) {
  const { t } = useTranslation('common')
  const lastGamePlay = gamePlay[gamePlay.length - 1]
  const userLastGamePlay = lastGamePlay?.userChoice
  const computerLastGamePlay = lastGamePlay?.computerChoice
  const roundNumber = gamePlay.length

  useEffect(() => {
    if (winner) {
      setIsTimerActive(false)
    }
  }, [winner, setIsTimerActive])

  return (
    <BoxLayout width={710}>
      <Box>
        <BoxHeading>
          {t('round')}
          {' '}
          {roundNumber}
        </BoxHeading>
      </Box>

      <Flex width="full" flexGrow={1}>
        {isTimerActive && !winner && (
          <Timer
            setGamePlay={setGamePlay}
            isTimerActive={isTimerActive}
            setIsTimerActive={setIsTimerActive}
            setTimeLeft={setTimeLeft}
            timeLeft={timeLeft}
            gamePlay={gamePlay}
          />
        )}
        {!winner
        && computerLastGamePlay
        && userLastGamePlay
        && !isTimerActive && (
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
        {/* {winner && <WinnerDisplay winner={winner} />} */}
        {winner && !isTimerActive && (<EndGameDisplay />)}
      </Flex>
    </BoxLayout>
  )
}

export default GameScene
