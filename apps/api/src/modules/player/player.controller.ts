import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common'
import { CreatePlayerDto } from '@shifumi/dtos'
import { PlayerService } from './player.service.js'

@Controller('players')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto)
  }

  @Get()
  async get(@Query('name') name: string) {
    const player = await this.playerService.getOne(name)
    return player 
  }
}
