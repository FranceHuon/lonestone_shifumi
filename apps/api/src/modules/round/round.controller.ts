import { Body, Controller, Param, Post } from '@nestjs/common'
import { RoundService } from './round.service.js'
import { Round } from '../../entities/round.entity.js'
import { CreateRoundDto } from '@shifumi/dtos'

@Controller('rounds')
export class RoundController {
  constructor(private roundService: RoundService) {}

  @Post(':gameId')
  async create(
    @Param('gameId') gameId:number,
    @Body() createRoundDto: CreateRoundDto,
  ): Promise<Round> {
    return this.roundService.createRound(gameId, createRoundDto.player1Choice, createRoundDto.player2Choice)
  }
}
