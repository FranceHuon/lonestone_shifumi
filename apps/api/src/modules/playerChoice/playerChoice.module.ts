import { Module } from '@nestjs/common'
import { PlayerChoiceController } from './playerChoice.controller.js'
import { PlayerChoiceService } from './playerChoice.service.js'

@Module({
  imports: [],
  controllers: [PlayerChoiceController],
  providers: [PlayerChoiceService],
})

export class PlayerChoiceModule {}
