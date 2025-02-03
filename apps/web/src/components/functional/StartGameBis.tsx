import type { CreateGameDto } from '@shifumi/dtos'
import { createGame } from '../../services/api'
import BasicButton from '../ui/BasicButton'

interface StartGameBisProps {
  isStarted: boolean
}
function StartGameBis({ isStarted }: StartGameBisProps) {
  const handleStartGame = async () => {
    try {
      const newGame: CreateGameDto = {
        playerOneId: 1,
        playerTwoId: 2,
      }
      const createdGame = await createGame(newGame)
      console.warn('Jeu créé :', createdGame)
    }
    catch (error) {
      console.error('Erreur lors de la création du jeu :', error)
    }
  }
  return (
    <div>
      {!isStarted && (
        <BasicButton onClick={handleStartGame} buttonTitle="Commencer la partie" />
      )}
    </div>
  )
}

export default StartGameBis
