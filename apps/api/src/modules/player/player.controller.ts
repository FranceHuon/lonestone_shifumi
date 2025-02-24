import { Body, Controller, Get, Param, Post} from '@nestjs/common'
import { PlayerService } from './player.service.js'
import { PlayerDto } from '@shifumi/dtos'

@Controller('players')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Post()
  async create(@Body('name') name:string): Promise<PlayerDto> {
    return this.playerService.create(name)
  }

  @Get(':id')
  async findById(@Param('id') id:number): Promise<PlayerDto> {
    return this.playerService.findById(id)
  }
  @Get('name/:name')
  async findByName(@Param('name') name:string): Promise<PlayerDto> {
    return this.playerService.findByName(name)
  }
}
