import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable } from '@nestjs/common'
import { CreatePlayerDto } from '@shifumi/dtos'
import { Player } from '../../entities/player.entity.js'

@Injectable()
export class PlayerService {
  constructor(private readonly em: EntityManager) {}

  async create(createPlayerDto: CreatePlayerDto) {
    return await this.em.transactional(async (em) => {
      const { name } = createPlayerDto

      let player = await em.findOne(Player, { name })

      if (!player) {
        player = em.create(Player, {
          name,
        })
        await em.persistAndFlush(player)
      }

      return player
    })
  }
}
