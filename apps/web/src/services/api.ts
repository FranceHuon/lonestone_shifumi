import type { CreateRoundDto, GameDto, PlayerDto, RoundDto } from '@shifumi/dtos'
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

// game
export async function createGame({ playerTwoName }: { playerTwoName: string }): Promise<GameDto> {
  return await api.post('games', { json: { playerTwoName } }).json()
}

export async function fetchOneGame(id: number): Promise<GameDto> {
  return await api.get(`games/${id}`).json()
}

// round
export async function createRound(createRoundDto: CreateRoundDto): Promise<RoundDto> {
  return await api.post('rounds', { json: createRoundDto }).json()
}
