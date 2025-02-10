import type { CreatePlayerDto } from '@shifumi/dtos'
import { createPlayer, fetchOnePlayerByName } from '../services/api'

export interface usePlayerProps {
  playerName: string
  setPlayerName: React.Dispatch<React.SetStateAction<string>>
}

function usePlayer({ playerName, setPlayerName }: usePlayerProps) {
  const createOrFetchPlayer = async () => {
    if (playerName.trim() === '')
      return

    try {
      const existingPlayer = await fetchOnePlayerByName(playerName)
      if (existingPlayer) {
        return existingPlayer
      }
    }
    catch (error: any) {
      if (error.response?.status === 404) {
        try {
          const newPlayer: CreatePlayerDto = { name: playerName }
          const createdPlayer = await createPlayer(newPlayer)
          return createdPlayer
        }
        catch (error) {
          console.error('Erreur lors de la création du joueur :', error)
        }
      }
      else {
        console.error('Erreur los de la récupération du joueur :', error)
      }
    }
  }
  return {
    playerName,
    setPlayerName,
    createOrFetchPlayer,
  }
}

export default usePlayer
