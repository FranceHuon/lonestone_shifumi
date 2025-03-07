import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable, NotFoundException } from '@nestjs/common'
import { PlayerDto } from '@shifumi/dtos'
import { Player } from '../../entities/player.entity.js'

@Injectable()
export class PlayerService {
  constructor(private readonly em: EntityManager) {}

  async create(name: string): Promise<Player> {
    return await this.em.transactional(async (em) => {
      let player = await em.findOne(Player, { name })

      if (!player) {
        player = em.create(Player, {
          name,
          isNpc: false,
        })
        await em.persistAndFlush(player)
      }
      return player
    })
  }

  async createNpc(): Promise<Player> {
    const npc = {
      name: 'Computer',
      isNpc: true,
    }

    return await this.em.transactional(async (em) => {
      let npcPlayer = await em.findOne(Player, npc)

      if (!npcPlayer) {
        npcPlayer = em.create(Player, npc)
        await em.persistAndFlush(npc)
      }
      return npcPlayer
    })
  }

  async findById(id: number): Promise<PlayerDto> {
    const player = await this.em.findOne(Player, { id })
    if (!player) {
      throw new NotFoundException(`Player with ID ${id} not found`)
    }
    return player
  }

  async findByName(name: string): Promise<Player> {
    const player = await this.em.findOne(Player, { name })
    if (!player) {
      throw new NotFoundException(`Player with name ${name} not found`)
    }
    return player
  }

  async findNpc(): Promise<Player> {
    const npcPlayer = await this.em.findOne(Player, { isNpc: true })
    if (!npcPlayer) {
      throw new NotFoundException('No NPC player found')
    }
    return npcPlayer
  }

  async remove(name: string): Promise<void> {
    const player = await this.em.findOneOrFail(Player, { name })
    await this.em.remove(player).flush()
  }
}
