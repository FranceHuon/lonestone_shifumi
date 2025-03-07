import type { CreateChoiceDto, CreateRoundDto, GameDto, PlayerDto, RoundDto } from '@shifumi/dtos'
import { api } from '../config'

// players
export async function createPlayer(name: string): Promise<PlayerDto> {
  return await api.post('players', { json: { name } }).json()
}

export async function fetchOnePlayer(id: number): Promise<PlayerDto> {
  return await api.get(`players/id/${id}`).json()
}

export async function fetchOnePlayerByName(name: string): Promise<PlayerDto> {
  return await api.get(`players/name/${name}`).json()
}

export async function deletePlayer(name: string): Promise<void> {
  return await api.delete(`players/${name}`).json()
}

// game
export async function createGame(playerOneName: string): Promise<GameDto> {
  return await api.post('game', { json: { playerOneName } }).json()
}

export async function fetchOneGame(id: number): Promise<GameDto> {
  return await api.get(`game/${id}`).json()
}

export async function deleteGame(id: number): Promise<void> {
  return await api.delete(`game/${id}`).json()
}

// round
export async function createRound(createRoundDto: CreateRoundDto): Promise<RoundDto> {
  return await api.post('rounds', { json: createRoundDto }).json()
}

export async function fetchAllRounds(gameId: number): Promise<RoundDto[]> {
  return await api.get('rounds', { searchParams: { gameId } }).json()
}

export async function makeChoice(createChoiceDto: CreateChoiceDto) {
  return await api.post('make-choice', { json: createChoiceDto }).json()
}
