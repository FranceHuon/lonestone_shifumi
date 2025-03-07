import { Box } from '@chakra-ui/react'
import { Choice } from '@shifumi/dtos'

import { BlueLeafIllu, BlueScissorsIllu, BlueStoneIllu } from '../../assets/BlueIllus'
import BasicButton from '../ui/Button'

interface ButtonsProps {
  handleUserChoice: (choice: Choice) => void
}

function Buttons({ handleUserChoice }: ButtonsProps) {
  return (
    <Box display="flex" justifyContent="space-between" width={710}>
      <BasicButton
        onClick={() => {
          handleUserChoice(Choice.STONE)
        }}
        icon={<BlueStoneIllu />}
        buttonTitle="Pierre !"
      />
      <BasicButton
        onClick={() => {
          handleUserChoice(Choice.LEAF)
        }}
        icon={<BlueLeafIllu />}
        buttonTitle="Feuille !"
      />
      <BasicButton
        onClick={() => {
          handleUserChoice(Choice.SCISSORS)
        }}
        icon={<BlueScissorsIllu />}
        buttonTitle="Ciseaux !"
      />
    </Box>
  )
}

export default Buttons
