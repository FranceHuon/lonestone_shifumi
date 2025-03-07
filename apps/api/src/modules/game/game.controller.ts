import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { GameDto } from '@shifumi/dtos'
import { PlayerService } from '../player/player.service.js'
import { GameService } from './game.service.js'

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService, private readonly playerService: PlayerService) {}

  @Post()
  async create(@Body() body: { playerOneName: string }): Promise<GameDto> {
    const playerOne = await this.playerService.findByName(body.playerOneName)
    const newGame = await this.gameService.createWithNpc(playerOne)
    return {
      id: newGame.id,
      players: newGame.players.getItems(),
      createdAt: newGame.createdAt,
    }
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<GameDto> {
    const game = await this.gameService.findOne(id)
    return {
      ...game,
      players: game.players.map(player => player),
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.gameService.remove(id)
  }
}
