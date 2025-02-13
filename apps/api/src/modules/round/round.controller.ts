import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { RoundService } from './round.service.js';
import { Round } from '../../entities/round.entity.js';
import { GameService } from '../game/game.service.js';

@Controller('rounds')
export class RoundController {
  constructor(private roundService: RoundService, private gameService: GameService) {}

  @Post()
  async create(@Body() body: { gameId: number; player1Choice: string; player2Choice: string}): Promise<Round> {
    const game = await this.gameService.getOne(body.gameId)
    if (!game) {
      throw new NotFoundException(`Game with ID ${body.gameId} not found`);
    }

    const newRound = await this.roundService.create(game, body.player1Choice, body.player2Choice);
    return newRound
  }
}
