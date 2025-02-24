import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable, NotFoundException } from '@nestjs/common'
import { GameDto } from '@shifumi/dtos'
import { Game } from '../../entities/game.entity.js'
import { Player } from '../../entities/player.entity.js'

@Injectable()
export class GameService {
  constructor(private readonly em: EntityManager) {}

  async create(playerTwoName: string): Promise<GameDto> {
    // Pour le moment playerOne est toujours Computer
    let playerOne = await this.em.findOne(Player, { name: 'Computer' })
    if (!playerOne) {
      playerOne = this.em.create(Player, { name: 'Computer' })
      await this.em.persistAndFlush(playerOne)
    }

    let playerTwo = await this.em.findOne(Player, { name: playerTwoName })
    if (!playerTwo) {
      playerTwo = this.em.create(Player, { name: playerTwoName })
      await this.em.persistAndFlush(playerTwo)
    }

    const game = this.em.create(Game, {
      createdAt: new Date(),
      updatedAt: new Date(),
      playerOne,
      playerTwo,
    })

    await this.em.persistAndFlush(game)
    return {
      id: game.id,
      playerOne: game.playerOne.name,
      playerTwo: game.playerTwo.name,
      createdAt: game.createdAt,
    }
  }

  async getOne(id: number): Promise<GameDto | null> {
    // populate est utilisé pour charger les relations entre les entités
    const game = await this.em.findOne(Game, { id }, { populate: ['playerOne', 'playerTwo'] })
    if (!game) {
      throw new NotFoundException(`Game with id ${id} not found`)
    }
    return {
      id: game.id,
      playerOne: game.playerOne.name,
      playerTwo: game.playerTwo.name,
      createdAt: game.createdAt,
    }
  }
}
