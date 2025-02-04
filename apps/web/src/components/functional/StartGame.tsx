import type { CreateGameDto } from '@shifumi/dtos'
import { useNavigate } from '@tanstack/react-router'
import { createGame, fetchOnePlayer } from '../../services/api'
import BasicButton from '../ui/BasicButton'

interface StartGameProps {
  onClick: () => void
  isStarted?: boolean
  buttonTitle: string
  playerName: string
}
function StartGame({ onClick, isStarted, buttonTitle, playerName }: StartGameProps) {
  const navigate = useNavigate()
  const handleStartGame = async () => {
    try {
      const player = await fetchOnePlayer(playerName)
      const playerId = player.id

      const newGame: CreateGameDto = {
        playerOneId: 1,
        playerTwoId: playerId,
      }
      const createdGame = await createGame(newGame)
      console.warn('Jeu créé :', createdGame)
      navigate({ to: `/shifumi/${createdGame.id}` })
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
