import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable } from '@nestjs/common'
import { Game } from '../../entities/game.entity.js'
import { Player } from '../../entities/player.entity.js'

@Injectable()
export class GameService {
  constructor(private readonly em: EntityManager) {}

  async create(playerTwoName: string): Promise<Game> {
    let playerOne = await this.em.findOne(Player, { name: 'Computer' });
    if(!playerOne) {
      playerOne = await this.em.create(Player, { name: 'Computer' });
      await this.em.persistAndFlush(playerOne)
    }

    let playerTwo = await this.em.findOne(Player, { name: playerTwoName });
    if(!playerTwo) {
      playerTwo = await this.em.create(Player, { name: playerTwoName });
      await this.em.persistAndFlush(playerTwo)
    }

    const game = this.em.create(Game, {
      createdAt: new Date(),
      updatedAt: new Date(),
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
