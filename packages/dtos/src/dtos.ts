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
  playerOneChoice: string
  playerTwoChoice: string
  createdAt: Date
  updatedAt: Date | null
}

export interface CreateRoundDto {
  playerOneChoice: string
  playerTwoChoice: string
  gameId: number
}
