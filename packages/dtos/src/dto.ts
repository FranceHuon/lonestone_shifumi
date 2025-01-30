export interface GameDto {
  id: number
  createdAt: Date
  updatedAt: Date
}

export interface CreateGameDto {
  playerOneId: number
  playerTwoId: number
}

export interface PlayerDto {
  playerName: string
}

export interface CreatePlayerDto {
  name: string
}

export interface RoundDto {
  number: number
  gameId: number
  playerOneMove: string
  playerTwoMove: string
}
