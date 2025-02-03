import { Box } from '@chakra-ui/react'
import { BlueLeafIllu, BlueScissorsIllu, BlueStoneIllu } from '../../assets/BlueIllus'
import { Choice } from '../../utils/enums'
import BasicButton from '../ui/BasicButton'

interface ButtonsProps {
  gameId: number
  handleUserChoice: (choice: Choice, gameId: number) => void
}

function Buttons({ gameId, handleUserChoice }: ButtonsProps) {
  const handleChoice = async (choice: Choice) => {
    try {
      await handleUserChoice(choice, gameId)
    }
    catch (error) {
      console.error('Erreur lors de la création de la round en base de données :', error)
    }
  }
  return (
    <Box width="full" display="flex" justifyContent="center">
      <BasicButton
        onClick={() => {
          handleChoice(Choice.STONE)
        }}
        icon={<BlueStoneIllu />}
        buttonTitle="Pierre !"
      />
      <BasicButton
        onClick={() => {
          handleChoice(Choice.LEAF)
        }}
        icon={<BlueLeafIllu />}
        buttonTitle="Feuille !"
      />
      <BasicButton
        onClick={() => {
          handleChoice(Choice.SCISSORS)
        }}
        icon={<BlueScissorsIllu />}
        buttonTitle="Ciseaux !"
      />
    </Box>
  )
}

export default Buttons
