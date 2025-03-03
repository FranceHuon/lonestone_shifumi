import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { GameDto } from '@shifumi/dtos'
import { GameService } from './game.service.js'

@Controller('games')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post()
  async create(@Body() body: { playerOneName: string, playerTwoName: string }): Promise<GameDto> {
    const newGame = await this.gameService.create(body.playerOneName, body.playerTwoName)
    return newGame
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<GameDto | null> {
    const game = await this.gameService.getOne(id)
    return game
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.gameService.remove(id)
  }
}
