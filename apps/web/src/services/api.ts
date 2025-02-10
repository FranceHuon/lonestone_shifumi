import { api } from '../config'

export async function createPlayer(name: string): Promise<{ id: number, name: string }> {
  return await api.post('players', { json: { name } }).json()
}

export async function fetchOnePlayer(id: number): Promise<{ id: number, name: string }> {
  return await api.get(`players/${id}`).json()
}

export async function fetchOnePlayerByName(name: string): Promise<{ id: number, name: string }> {
  return await api.get(`players/name/${name}`).json()
}

export async function createGame(newGame: { playerOneId: number, playerTwoId: number }): Promise<{ id: number }> {
  return await api.post('games', { json: newGame }).json()
}
