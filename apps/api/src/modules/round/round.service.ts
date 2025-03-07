import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable } from '@nestjs/common'
import { RoundDto } from '@shifumi/dtos'
import { Game } from '../../entities/game.entity.js'
import { PlayerChoice } from '../../entities/playerChoice.entity.js'
import { Round } from '../../entities/round.entity.js'
import { getRandomChoice } from '../../utils/getRandomChoice.js'
import { NpcService } from '../npc/npc.service.js'
import { PlayerChoiceService } from '../playerChoice/playerChoice.service.js'

@Injectable()
export class RoundService {
  constructor(
    private readonly em: EntityManager,
    private readonly playerChoiceService: PlayerChoiceService,
  ) {}

  async create(game: Game): Promise<Round> {
    return await this.em.transactional(async (em) => {
    // Déterminer le numéro du round
      const roundCount = await em.count(Round, { game })
      const roundNumber = roundCount + 1
      const round = new Round()
      round.createdAt = new Date()
      round.updatedAt = new Date()
      round.roundNumber = roundNumber
      await em.persistAndFlush(round)
      return round
    })
  }

  async addChoice(round: Round, playerChoice: PlayerChoice): Promise<Round> {
    return await this.em.transactional(async (em) => {
      round.playersChoices.add(playerChoice)
      await em.persistAndFlush(round)
      return round
    })
  }

  // async getAll(gameId: number): Promise<RoundDto[]> {
  //   const rounds = await this.em.find(Round, { game: { id: gameId } })
  //   return rounds
  // }
}
