import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common'
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
}
