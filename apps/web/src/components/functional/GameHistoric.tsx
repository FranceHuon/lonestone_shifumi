import type { PlayersChoices } from './AppLayout'
import { Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { getRoundResult } from '../../utils/getResult'
import BoxHeading from '../ui/BoxHeading'
import BoxLayout from '../ui/BoxLayout'
import HistoryTag from '../ui/HistoryTag'
import IconShifu from '../ui/IconShifu'

interface GameHistoricProps {
  gamePlay: PlayersChoices
}

function GameHistoric({ gamePlay }: GameHistoricProps) {
  const { t } = useTranslation('common')
  const hitHistory = gamePlay.map(round => getRoundResult(round))
  return (
    <BoxLayout gap={2} overflowY="scroll" width={300}>
      <BoxHeading>{t('historic')}</BoxHeading>
      {hitHistory.map((item, index) => {
        return (
          <HistoryTag key={index}>
            <IconShifu
              backgroundColor={item.iconColorLeft}
              icon={item.leftIcon}
            />
            <Text padding={2} color="color.lightBlue" textAlign="center">
              {item.sentence}
            </Text>
            <IconShifu
              backgroundColor={item.iconColorRight}
              icon={item.rightIcon}
            />
          </HistoryTag>
        )
      })}
    </BoxLayout>
  )
}

export default GameHistoric
