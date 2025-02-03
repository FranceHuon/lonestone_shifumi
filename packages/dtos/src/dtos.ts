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
  id: number
  gameId: number
  player1Choice: string
  player2Choice: string
  createdAt: Date
  updatedAt: Date | null
}

export interface CreateRoundDto {
  player1Choice: string
  player2Choice: string
}
