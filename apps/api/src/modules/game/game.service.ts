import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable } from '@nestjs/common'
import { CreateGameDto } from '@shifumi/dtos'
import { Game } from '../../entities/game.entity.js'

@Injectable()
export class GameService {
  constructor(private readonly em: EntityManager) {}

  async create(createGameDto: CreateGameDto) {
    return await this.em.transactional(async (em) => {
      const { playerOneId, playerTwoId } = createGameDto

      const game = em.create(Game, {
        playerOneId,
        playerTwoId,
        createdAt: new Date(),
        updatedAt: null,
      })
      await em.persistAndFlush(game)
      return game
    })
  }

  // findAll(): Game[] {
  //   return this.game
  // }
}
