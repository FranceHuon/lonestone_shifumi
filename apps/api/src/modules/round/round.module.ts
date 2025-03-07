import { Module } from '@nestjs/common'
import { RoundController } from './round.controller.js'
import { RoundService } from './round.service.js'

@Module({
  imports: [],
  controllers: [RoundController],
  providers: [RoundService],
})

export class RoundModule {}
