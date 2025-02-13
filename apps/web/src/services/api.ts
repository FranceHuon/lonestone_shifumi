import { api } from '../config'

export interface GameDto {
  id: number
  createdAt: Date
  updatedAt: Date | null
  playerOne: number
  playerTwo: number
}

export async function createPlayer(name: string): Promise<{ id: number, name: string }> {
  return await api.post('players', { json: { name } }).json()
}

export async function fetchOnePlayer(id: number): Promise<{ id: number, name: string }> {
  return await api.get(`players/${id}`).json()
}

export async function fetchOnePlayerByName(name: string): Promise<{ id: number, name: string }> {
  return await api.get(`players/name/${name}`).json()
}

export async function createGame(newGame: { playerTwoName: string }): Promise<GameDto> {
  return await api.post('games', { json: newGame }).json()
}
