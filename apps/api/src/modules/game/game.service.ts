import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable, NotFoundException } from '@nestjs/common'
import { GameDto } from '@shifumi/dtos'
import { Game } from '../../entities/game.entity.js'
import { Player } from '../../entities/player.entity.js'

@Injectable()
export class GameService {
  constructor(private readonly em: EntityManager) {}

  async create(playerOneName: string, playerTwoName: string): Promise<GameDto> {
    let playerOne = await this.em.findOne(Player, { name: playerOneName })
    if (!playerOne) {
      playerOne = new Player()
      playerOne.name = playerOneName
      await this.em.persistAndFlush(playerOne)
    }
    let playerTwo = await this.em.findOne(Player, { name: playerTwoName })
    if (!playerTwo) {
      playerTwo = new Player()
      playerTwo.name = playerTwoName
      await this.em.persistAndFlush(playerTwo)
    }

    const game = new Game()
    game.createdAt = new Date()
    game.updatedAt = new Date()
    game.players.add(playerOne, playerTwo)

    await this.em.persistAndFlush(game)
    return {
      id: game.id,
      players: game.players.getItems().map(player => player.name),
      createdAt: game.createdAt,
    }
  }

  async getOne(id: number): Promise<GameDto | null> {
    // populate est utilisé pour charger les relations entre les entités
    const game = await this.em.findOne(Game, { id }, { populate: ['players'] })
    if (!game) {
      throw new NotFoundException(`Game with id ${id} not found`)
    }
    return {
      id: game.id,
      players: game.players.getItems().map(player => player.name),
      createdAt: game.createdAt,
    }
  }

  async remove(id: number): Promise<void> {
    const game = await this.em.findOneOrFail(Game, { id })
    await this.em.remove(game).flush()
  }
}
