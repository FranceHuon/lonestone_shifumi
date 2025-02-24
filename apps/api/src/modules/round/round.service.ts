import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable } from '@nestjs/common'
import { CreateRoundDto, RoundDto } from '@shifumi/dtos'
import { Game } from '../../entities/game.entity.js'
import { Round } from '../../entities/round.entity.js'

@Injectable()
export class RoundService {
  constructor(private readonly em: EntityManager) {}

  async create(createRoundDto: CreateRoundDto): Promise<RoundDto> {
    const { gameId, playerOneChoice, playerTwoChoice } = createRoundDto

    const game = await this.em.findOne(Game, { id: gameId })
    if (!game) {
      throw new Error('Game not found')
    }
    const round = this.em.create(Round, {
      playerOneChoice,
      playerTwoChoice,
      game,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    await this.em.persistAndFlush(round)
    return {
      id: round.id,
      playerOneChoice: round.playerOneChoice,
      playerTwoChoice: round.playerTwoChoice,
      createdAt: round.createdAt,
      updatedAt: round.updatedAt,
    }
  }
}
