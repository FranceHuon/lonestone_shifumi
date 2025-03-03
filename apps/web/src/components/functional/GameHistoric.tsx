import type { PlayersChoices } from '../../routes/shifumi.$gameId'
import { Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { getRoundResult } from '../../utils/getResult'
import BoxLayout from '../ui/BoxLayout'
import IconShifu from '../ui/IconShifu'
import Tag from '../ui/Tag'

interface GameHistoricProps {
  gamePlay: PlayersChoices
}

function GameHistoric({ gamePlay }: GameHistoricProps) {
  const { t } = useTranslation('common')
  const hitHistory = gamePlay.map(round => getRoundResult(round))
  return (
    <BoxLayout
      gap={4}
      overflowY="auto"
      overflowX="hidden"
      width={310}
      title={t('historic')}
    >

      {hitHistory.map((item, index) => {
        return (
          <Tag
            margin={2}
            padding={3}
            color="color.nightBlue"
            key={index}
            height={60}
          >
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
          </Tag>
        )
      })}
    </BoxLayout>
  )
}

export default GameHistoric
