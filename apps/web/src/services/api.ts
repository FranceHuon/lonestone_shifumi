import type { CreateGameDto, CreatePlayerDto, CreateRoundDto, GameDto, PlayerDto, RoundDto } from '@shifumi/dtos'
import { api } from '../config'

export async function fetchOneGame(
  id: number,
): Promise<GameDto> {
  return await api.get(`games/${id}`).json()
}

export async function createGame(newGame: CreateGameDto): Promise<GameDto> {
  return await api.post('games', { json: newGame }).json()
}

export async function createPlayer(newPlayer: CreatePlayerDto): Promise<PlayerDto> {
  return await api.post('players', { json: newPlayer }).json()
}

export async function createRound(gameId: number, newRound: CreateRoundDto): Promise<RoundDto> {
  return await api.post(`rounds/${gameId}`, { json: newRound }).json()
}

export async function fetchOnePlayer(
  name: string,
): Promise<PlayerDto> {
  return await api.get(`players/${name}`).json()
}
