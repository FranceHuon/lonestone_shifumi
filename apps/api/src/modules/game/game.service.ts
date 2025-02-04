import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable } from '@nestjs/common'
import { CreateGameDto, GameDto } from '@shifumi/dtos'
import { Game } from '../../entities/game.entity.js'
import { Player } from '../../entities/player.entity.js'

@Injectable()
export class GameService {
  constructor(private readonly em: EntityManager) {}

  async create(createGameDto: CreateGameDto) {
    return await this.em.transactional(async (em) => {
      const { playerTwoId } = createGameDto
      const Computer = 1
      const playerOne = await em.findOneOrFail(Player, { id: Computer })
      const playerTwo = await em.findOneOrFail(Player, { id: playerTwoId })

      const game = em.create(Game, {
        playerOne,
        playerTwo,
        createdAt: new Date(),
        updatedAt: null,
      })
      await em.persistAndFlush(game)
      return { id: game.id }
    })
  }

  async getOne(id: number): Promise<GameDto> {
    const game = await this.em.findOneOrFail(Game, { id })
    return game
  }
}
