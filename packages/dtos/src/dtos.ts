import type { Choice } from './enums'

export interface GameDto {
  id: number
  createdAt: Date
  players: string[]
}

export interface PlayerDto {
  id: number
  name: string
}

export interface RoundDto {
  roundNumber: number
  playerOneChoice: Choice
  playerTwoChoice: Choice
  createdAt: Date
  updatedAt: Date | null
}

export interface CreateRoundDto {
  playerOneChoice: Choice
  playerTwoChoice: Choice
  gameId: number
}
