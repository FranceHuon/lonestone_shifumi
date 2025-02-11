import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable } from '@nestjs/common'
import { Game } from '../../entities/game.entity.js'
import { Round } from '../../entities/round.entity.js'

@Injectable()
export class RoundService {
  constructor(private readonly em: EntityManager) {}

  async create(gameId: number, player1Choice: string, player2Choice: string): Promise<Round> {
    return await this.em.transactional(async (em) => {
      const game = await em.findOneOrFail(Game, { id: gameId })

      const round = em.create(Round, {
        game,
        player1Choice,
        player2Choice,
        createdAt: new Date(),
        updatedAt: new Date(),
      })

      await em.persistAndFlush(round)
      return round
    })
  }

  async getRoundsByGame(gameId: number): Promise<Round[]> {
    return await this.em.find(Round, { game: gameId }, { populate: ['game'] });
  }
  
  async getOne(id: number): Promise<Round | null> {
    return await this.em.findOne(Round, { id }, { populate: ['game'] });
  }
}
