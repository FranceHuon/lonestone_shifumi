import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable, NotFoundException } from '@nestjs/common'
import { Player } from '../../entities/player.entity.js'

@Injectable()
export class PlayerService {
  constructor(private readonly em: EntityManager) {}

  async create(name: string): Promise<Player> {
    return await this.em.transactional(async (em) => {

      let player = await this.em.findOne(Player, { name })

      if (!player) {
        player = em.create(Player, {
          name,
        })
        await em.persistAndFlush(player)
      }
      return player
    })
  }

  async findById(id: number): Promise<Player> {
    const player = await this.em.findOne(Player, { id });
    if (!player) {
      throw new NotFoundException(`Player with ID ${id} not found`)
    }
    return player
  }

  async findByName(name: string): Promise<Player> {
    const player = await this.em.findOne(Player, { name });
    if (!player) {
      throw new NotFoundException(`Player with name ${name} not found`)
    }
    return player
  }
}
