import { Body, Controller, Post } from '@nestjs/common'

@Controller('rounds')
export class RoundController {
  constructor(private roundService: RoundService) {}

  @Post()
  async create(@Body() createRoundDto: CreateRoundDto) {
    return this.roundService.create(createRoundDto)
  }
}
