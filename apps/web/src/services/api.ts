import type { CreateGameDto, GameDto } from '@shifumi/dtos'
import { api } from '../config'

export async function fetchOneGame(
  id: string,
): Promise<GameDto> {
  return await api.get(`games/${id}`).json()
}

export async function createGame(newGame: CreateGameDto): Promise<GameDto> {
  return await api.post('games', { json: newGame }).json()
}
