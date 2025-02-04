import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common'
import { CreatePlayerDto, PlayerDto } from '@shifumi/dtos'
import { PlayerService } from './player.service.js'

@Controller('players')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto)
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PlayerDto> {
    return await this.playerService.findOne(id)
  
  }

  @Get(':name')
  async findOneByName(@Param('name') name: string): Promise<PlayerDto> {
    return await this.playerService.getOneByName(name)
  }
}
