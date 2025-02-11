import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoundService } from './round.service.js';

@Controller('rounds')
export class RoundController {
  constructor(private roundService: RoundService) {}

  @Post()
  async createRound(
    @Body() body: { gameId: number; player1Choice: string; player2Choice: string }
  ) {
    return await this.roundService.create(body.gameId, body.player1Choice, body.player2Choice);
  }

  @Get(':gameId')
  async getRoundsByGame(@Param('gameId') gameId: number) {
    return await this.roundService.getRoundsByGame(gameId);
  }

  @Get('id/:id')
  async getOneRound(@Param('id') id: number) {
    return await this.roundService.getOne(id);
  }
}
