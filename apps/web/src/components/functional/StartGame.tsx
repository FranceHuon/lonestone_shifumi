import type { CreateGameDto } from '@shifumi/dtos'
import { createGame } from '../../services/api'
import BasicButton from '../ui/BasicButton'

interface StartGameProps {
  onClick: () => void
  isStarted?: boolean
  buttonTitle: string
}
function StartGame({ onClick, isStarted, buttonTitle }: StartGameProps) {
  const handleStartGame = async () => {
    try {
      const newGame: CreateGameDto = {
        playerOneId: 1,
        playerTwoId: 2,
      }
      const createdGame = await createGame(newGame)
      console.warn('Jeu créé :', createdGame)
      onClick()
    }
    catch (error) {
      console.error('Erreur lors de la création du jeu :', error)
    }
  }
  return (
    <div>
      {!isStarted && (
        <BasicButton onClick={handleStartGame} buttonTitle={buttonTitle} />
      )}
    </div>
  )
}

export default StartGame
