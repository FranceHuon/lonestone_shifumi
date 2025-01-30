export interface GameDto {
  id: number
  createdAt: Date
  updatedAt: Date
}

export interface CreateGameDto {
  playerOneId: number
  playerTwoId: number
}
