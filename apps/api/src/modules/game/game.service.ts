import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable } from '@nestjs/common'
import { Game } from '../../entities/game.entity.js'
import { Player } from '../../entities/player.entity.js'

@Injectable()
export class GameService {
  constructor(private readonly em: EntityManager) {}

  async create(playerTwoId: number): Promise<Game> {
    let playerOne = await this.em.findOne(Player, { id: 1 });
    if(!playerOne) {
      playerOne = await this.em.create(Player, { id: 1, name: 'Computer' });
      await this.em.persistAndFlush(playerOne)
    }

  const playerTwo = await this.em.findOneOrFail(Player, { id: playerTwoId })

  const game = this.em.create(Game, {
    createdAt: new Date(),
    updatedAt: null,
    playerOne,
    playerTwo
   })

  await this.em.persistAndFlush(game)
  return game
  }

  async getOne(id: number): Promise<Game | null> {
    return await this.em.findOne(Game, { id }, { populate: ['playerOne', 'playerTwo'] })
  }
}
