import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable } from '@nestjs/common'
import { PlayerDto } from '@shifumi/dtos'
import { Player } from '../../entities/player.entity.js'

@Injectable()
export class NpcService {
  constructor(private readonly em: EntityManager) {}

  async create(): Promise<PlayerDto> {
    const name = 'Computer'
    let npc = await this.em.findOne(Player, { name, isNpc: true })

    if (!npc) {
      npc = this.em.create(Player, { name, isNpc: true })
      await this.em.persistAndFlush(npc)
    }
    return npc
  }
}
