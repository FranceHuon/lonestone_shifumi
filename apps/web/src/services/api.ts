import type { CreateGameDto, CreatePlayerDto, GameDto, PlayerDto } from '@shifumi/dtos'
import { api } from '../config'

export async function fetchOneGame(
  id: string,
): Promise<GameDto> {
  return await api.get(`games/${id}`).json()
}

export async function createGame(newGame: CreateGameDto): Promise<GameDto> {
  return await api.post('games', { json: newGame }).json()
}

export async function createPlayer(newPlayer: CreatePlayerDto): Promise<PlayerDto> {
  return await api.post('players', { json: newPlayer }).json()
}
