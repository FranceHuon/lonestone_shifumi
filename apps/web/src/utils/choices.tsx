import { BlueLeafIllu, BlueScissorsIllu, BlueStoneIllu } from '../assets/BlueIllus'
import { LeafIcon, ScissorsIcon, StoneIcon } from '../assets/Icons'
import { RedLeafIllu, RedScissorsIllu, RedStoneIllu } from '../assets/RedIllus'
import { Choice } from './enums'

export const choices = {
  [Choice.LEAF]: {
    blueIllu: <BlueLeafIllu />,
    redIllu: <RedLeafIllu />,
    icon: <LeafIcon />,
    name: 'Feuille',
  },
  [Choice.STONE]: {
    blueIllu: <BlueStoneIllu />,
    redIllu: <RedStoneIllu />,
    icon: <StoneIcon />,
    name: 'Pierre',
  },
  [Choice.SCISSORS]: {
    blueIllu: <BlueScissorsIllu />,
    redIllu: <RedScissorsIllu />,
    icon: <ScissorsIcon />,
    name: 'Ciseaux',
  },
}
