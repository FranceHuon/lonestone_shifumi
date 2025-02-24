import { Module } from '@nestjs/common'
import { GameService } from '../game/game.service.js'
import { RoundController } from './round.controller.js'
import { RoundService } from './round.service.js'

@Module({
  imports: [],
  controllers: [RoundController],
  providers: [RoundService, GameService],
})

export class RoundModule {}
