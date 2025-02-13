import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable } from '@nestjs/common'
import { Game } from '../../entities/game.entity.js'
import { Round } from '../../entities/round.entity.js'

@Injectable()
export class RoundService {
  constructor(private readonly em: EntityManager) {}

  async create(game: Game, player1Choice: string, player2Choice: string): Promise<Round> {
      const round = this.em.create(Round, {
        game,
        player1Choice,
        player2Choice,
        createdAt: new Date(),
        updatedAt: new Date(),
      })

      await this.em.persistAndFlush(round)
      return round
    }
}
