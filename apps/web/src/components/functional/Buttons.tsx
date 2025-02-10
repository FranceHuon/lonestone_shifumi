import { Box } from '@chakra-ui/react'
import { BlueLeafIllu, BlueScissorsIllu, BlueStoneIllu } from '../../assets/BlueIllus'
import { Choice } from '../../utils/enums'
import BasicButton from '../ui/Button'

interface ButtonsProps {
  handleUserChoice: (choice: Choice) => void
}

function Buttons({ handleUserChoice }: ButtonsProps) {
  return (
    <Box width="full" display="flex" justifyContent="center">
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
