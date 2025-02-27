import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { GameDto } from '@shifumi/dtos'
import { GameService } from './game.service.js'

@Controller('games')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post()
  async create(@Body() body: { playerTwoName: string }): Promise<GameDto> {
    const newGame = await this.gameService.create(body.playerTwoName)
    return newGame
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<GameDto | null> {
    const game = await this.gameService.getOne(id)
    return game
  }
}
