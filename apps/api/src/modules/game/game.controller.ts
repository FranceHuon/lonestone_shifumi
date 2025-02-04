import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateGameDto, GameDto } from '@shifumi/dtos'
import { GameService } from './game.service.js'

@Controller('games')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post()
  async create(@Body() createGameDto: CreateGameDto) {
    const newGame = await this.gameService.create(createGameDto)
    return newGame
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.warn(params.id)
    return 'This action returns a #${params.id} game'
  }

  // @Get()
  // async findAll() {
  //   return this.gameService.findAll()
  // }
}
