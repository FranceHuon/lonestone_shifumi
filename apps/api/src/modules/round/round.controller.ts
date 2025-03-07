import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { CreateChoiceDto, CreateRoundDto, RoundDto } from '@shifumi/dtos'
import { GameService } from '../game/game.service.js'
import { RoundService } from './round.service.js'

@Controller('rounds')
export class RoundController {
  constructor(private readonly roundService: RoundService, private readonly gameService: GameService) {}

  @Post()
  async create(@Body() createRoundDto: CreateRoundDto): Promise<RoundDto> {
    const game = await this.gameService.findOne(createRoundDto.gameId)
    const newRound = await this.roundService.create(game)
    return {
      ...newRound,
      playersChoices: newRound.playersChoices.map((playerChoice) => {
        return {
          choice: playerChoice.choice,
          playerId: playerChoice.player.id,
        }
      }),
    }
  }

  // @Get()
  // async find(@Query('gameId') gameId: number): Promise<RoundDto[]> {
  //   return await this.roundService.getAll(gameId)
  // }
}
