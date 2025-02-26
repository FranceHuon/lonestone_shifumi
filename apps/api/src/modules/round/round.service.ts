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

    const roundCount = await this.em.count(Round, { game })
    const roundNumber = roundCount + 1

    const round = this.em.create(Round, {
      roundNumber,
      playerOneChoice,
      playerTwoChoice,
      game,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    await this.em.persistAndFlush(round)
    return {
      roundNumber: round.roundNumber,
      playerOneChoice: round.playerOneChoice,
      playerTwoChoice: round.playerTwoChoice,
      createdAt: round.createdAt,
      updatedAt: round.updatedAt,
    }
  }

  async getAll(gameId: number): Promise<RoundDto[]> {
    const rounds = await this.em.find(Round, { game: { id: gameId } })
    return rounds
  }
}
