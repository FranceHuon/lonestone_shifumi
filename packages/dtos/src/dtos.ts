import type { Choice } from './enums'

export interface GameDto {
  id: number
  createdAt: Date
  players: PlayerDto[]
}

export interface PlayerDto {
  id: number
  name: string
  isNpc: boolean
}

export interface RoundDto {
  roundNumber: number
  playersChoices: CreateChoiceDto[]
  createdAt: Date
  updatedAt: Date | null
}

export interface CreateRoundDto {
  gameId: number
  playerOneChoice: Choice
  playerTwoChoice: Choice
}

export interface CreateChoiceDto {
  choice: Choice
  playerId: number
}
