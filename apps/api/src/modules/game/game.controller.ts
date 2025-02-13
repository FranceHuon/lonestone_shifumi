import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { GameService } from './game.service.js'
import { Game } from '../../entities/game.entity.js'

@Controller('games')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post()
  async create(@Body() body: { playerTwoName: string }): Promise<Game> {
    const newGame = await this.gameService.create(body.playerTwoName)
    return newGame
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Game | null> {
    return this.gameService.getOne(id)
  }

}



