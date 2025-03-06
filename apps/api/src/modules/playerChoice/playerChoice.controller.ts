import { Body, Controller, Post } from '@nestjs/common'
import { CreateChoiceDto } from '@shifumi/dtos'
import { PlayerChoiceService } from './playerChoice.service.js'

@Controller('make-choice')
export class PlayerChoiceController {
  constructor(private playerChoiceService: PlayerChoiceService) {}

  @Post()
  async makeChoice(@Body() createChoiceDto: CreateChoiceDto) {
    return await this.playerChoiceService.makeChoice(createChoiceDto)
  }
}
