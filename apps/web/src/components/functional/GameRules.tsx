import { useTranslation } from 'react-i18next'

import { LeafIcon, ScissorsIcon, StoneIcon } from '../../assets/Icons'
import BoxHeading from '../ui/BoxHeading'
import BoxLayout from '../ui/BoxLayout'
import GameRulesTag from '../ui/GameRulesTag'
import GameRulesText from '../ui/GameRulesText'
import IconShifu from '../ui/IconShifu'
import Line from '../ui/Line'

function GameRules() {
  const { t } = useTranslation('common')
  return (
    <BoxLayout width={300}>
      <BoxHeading>{t('rules')}</BoxHeading>
      <GameRulesTag>
        <IconShifu backgroundColor="color.darkBlue" icon={<StoneIcon />} />
        <GameRulesText rule="pierre bat ciseaux"></GameRulesText>
        <IconShifu backgroundColor="color.darkBlue" icon={<ScissorsIcon />} />
      </GameRulesTag>
      <GameRulesTag>
        <IconShifu backgroundColor="color.darkBlue" icon={<LeafIcon />} />
        <GameRulesText rule="feuille bat pierre"></GameRulesText>
        <IconShifu backgroundColor="color.darkBlue" icon={<StoneIcon />} />
      </GameRulesTag>
      <GameRulesTag>
        <IconShifu backgroundColor="color.darkBlue" icon={<ScissorsIcon />} />
        <GameRulesText rule="ciseaux bat feuille"></GameRulesText>
        <IconShifu backgroundColor="color.darkBlue" icon={<LeafIcon />} />
      </GameRulesTag>
      <Line />
      <GameRulesText rule="Le premier à 5 gagne"></GameRulesText>
    </BoxLayout>
  )
}

export default GameRules
