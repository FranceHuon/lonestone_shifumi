export interface GameDto {
  id: number
  createdAt: Date
  updatedAt: Date | null
}

export interface CreateGameDto {
  playerOneId: number
  playerTwoId: number
}

export interface PlayerDto {
  name: string
}

export interface CreatePlayerDto {
  name: string
}

export interface RoundDto {
  id: number
  gameId: number
  computerChoice: string
  userChoice: string
  createdAt: Date
  updatedAt: Date | null
}

export interface CreateRoundDto {
  computerChoice: string
  userChoice: string
}
