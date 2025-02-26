import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { CreateRoundDto, RoundDto } from '@shifumi/dtos'
import { RoundService } from './round.service.js'

@Controller('rounds')
export class RoundController {
  constructor(private roundService: RoundService) {}

  @Post()
  async create(@Body() createRoundDto: CreateRoundDto): Promise<RoundDto> {
    const newRound = await this.roundService.create(createRoundDto)
    return newRound
  }

  @Get()
  async find(@Query('gameId') gameId: number): Promise<RoundDto[]> {
    return await this.roundService.getAll(gameId)
  }
}
