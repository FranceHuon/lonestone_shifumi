import { BadRequestException, Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { PlayerDto } from '@shifumi/dtos'
import { PlayerService } from './player.service.js'

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  async create(@Body('name') name: string): Promise<PlayerDto> {
    if (!name) {
      throw new BadRequestException('name is empty shame')
    }
    const player = await this.playerService.create(name)
    return player
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<PlayerDto> {
    return this.playerService.findById(id)
  }

  @Get(':name')
  async findByName(@Param('name') name: string): Promise<PlayerDto> {
    return this.playerService.findByName(name)
  }

  @Delete(':name')
  async remove(@Param('name') name: string): Promise<void> {
    await this.playerService.remove(name)
  }
}
