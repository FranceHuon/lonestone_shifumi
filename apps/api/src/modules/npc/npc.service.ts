import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable } from '@nestjs/common'
import { CreateChoiceDto, PlayerDto } from '@shifumi/dtos'
import { Player } from '../../entities/player.entity.js'
import { PlayerChoice } from '../../entities/playerChoice.entity.js'
import { getRandomChoice } from '../../utils/getRandomChoice.js'

@Injectable()
export class NpcService {
  constructor(private readonly em: EntityManager) {}

  async makeNpcChoice(createChoiceDto: CreateChoiceDto): Promise <PlayerChoice> {
    const { playerId } = createChoiceDto
    const player = await this.em.findOne(Player, { id: playerId, isNpc: true })
    if (!player)
      throw new Error('Player not found')
    const npcChoice = getRandomChoice()

    const playerChoice = this.em.create(PlayerChoice, {
      player,
      choice: npcChoice,
    })
    await this.em.persistAndFlush(playerChoice)
    return playerChoice
  }
}
