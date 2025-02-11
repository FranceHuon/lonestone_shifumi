import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { GameService } from './game.service.js'
import { Game } from '../../entities/game.entity.js'

@Controller('games')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post()
  async create(@Body() body: { playerTwoId: number }): Promise<Game> {
    const newGame = await this.gameService.create(body.playerTwoId)
    return newGame
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Game | null> {
    return this.gameService.getOne(id)
  }

}



