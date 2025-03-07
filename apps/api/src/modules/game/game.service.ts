import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable, NotFoundException } from '@nestjs/common'
import { Game } from '../../entities/game.entity.js'
import { Player } from '../../entities/player.entity.js'
import { PlayerService } from '../player/player.service.js'

@Injectable()
export class GameService {
  constructor(private readonly em: EntityManager, private readonly playerService: PlayerService) {}

  async createWithNpc(player: Player): Promise<Game> {
    const game = new Game()
    game.createdAt = new Date()
    game.updatedAt = new Date()
    const playerTwo = await this.playerService.createNpc()
    game.players.add(player, playerTwo)

    await this.em.persistAndFlush(game)
    return game
  }

  async findOne(id: number): Promise<Game> {
    // populate est utilisé pour charger les relations entre les entités
    const game = await this.em.findOne(Game, { id }, { populate: ['players'] })
    if (!game) {
      throw new NotFoundException(`Game with id ${id} not found`)
    }
    return game
  }

  // async getPlayersByGameId(id: number): Promise<{ playerOne: Player, playerTwo: Player }> {
  //   const game = await this.em.findOne(Game, { id }, { populate: ['players'] })
  //   if (!game) {
  //     throw new Error('Game not found')
  //   }
  //   const players = game.players.getItems()
  //   return {
  //     playerOne: players[0],
  //     playerTwo: players[1],
  //   }
  // }

  async remove(id: number): Promise<void> {
    const game = await this.em.findOneOrFail(Game, { id })
    await this.em.remove(game).flush()
  }
}
