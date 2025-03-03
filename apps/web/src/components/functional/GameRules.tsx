import { Box, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { LeafIcon, ScissorsIcon, StoneIcon } from '../../assets/Icons'
import BoxLayout from '../ui/BoxLayout'
import IconShifu from '../ui/IconShifu'
import Tag from '../ui/Tag'

function GameRules() {
  const { t } = useTranslation('common')
  return (
    <BoxLayout width={300} gap={6} title={t('rules')}>
      <Tag>
        <IconShifu backgroundColor="color.darkBlue" icon={<StoneIcon />} />
        <Text color="color.lightBlue" padding={2}>{t('stoneRule')}</Text>
        <IconShifu backgroundColor="color.darkBlue" icon={<ScissorsIcon />} />
      </Tag>
      <Tag>
        <IconShifu backgroundColor="color.darkBlue" icon={<LeafIcon />} />
        <Text color="color.lightBlue" padding={2}>{t('leafRule')}</Text>
        <IconShifu backgroundColor="color.darkBlue" icon={<StoneIcon />} />
      </Tag>
      <Tag>
        <IconShifu backgroundColor="color.darkBlue" icon={<ScissorsIcon />} />
        <Text color="color.lightBlue" padding={2}>{t('scissorsRule')}</Text>
        <IconShifu backgroundColor="color.darkBlue" icon={<LeafIcon />} />
      </Tag>
      <Box bg="color.darkBlue" height={1} width={150}></Box>
      <Text color="color.lightBlue" padding={2}>Le premier à 5 gagne</Text>
    </BoxLayout>
  )
}

export default GameRules
