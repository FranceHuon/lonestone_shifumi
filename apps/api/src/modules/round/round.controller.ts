import { Body, Controller, Post } from '@nestjs/common'
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
}
