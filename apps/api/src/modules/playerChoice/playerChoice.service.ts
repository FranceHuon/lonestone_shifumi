import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable } from '@nestjs/common'
import { CreateChoiceDto } from '@shifumi/dtos'
import { Game } from '../../entities/game.entity.js'
import { Player } from '../../entities/player.entity.js'
import { PlayerChoice } from '../../entities/playerChoice.entity.js'

@Injectable()
export class PlayerChoiceService {
  constructor(private readonly em: EntityManager) {}

  async makeChoice(createChoiceDto: CreateChoiceDto): Promise<PlayerChoice> {
    const { choice, playerId } = createChoiceDto
    const player = await this.em.findOne(Player, { id: playerId })
    if (!player)
      throw new Error('Player not found')
    const playerChoice = this.em.create(PlayerChoice, {
      player,
      choice,
    })
    await this.em.persistAndFlush(playerChoice)
    return playerChoice
  }
}
