import { Body, Controller, Param, Post } from '@nestjs/common'
import { CreateRoundDto } from '@shifumi/dtos'
import { Round } from '../../entities/round.entity.js'
import { RoundService } from './round.service.js'

@Controller('rounds')
export class RoundController {
  constructor(private roundService: RoundService) {}

  @Post(':gameId')
  async create(
    @Param('gameId') gameId: number,
    @Body() createRoundDto: CreateRoundDto,
  ): Promise<Round> {
    return this.roundService.createRound(gameId, createRoundDto.computerChoice, createRoundDto.userChoice)
  }
}
