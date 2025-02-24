import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { RoundService } from './round.service.js';
import { CreateRoundDto, RoundDto } from '@shifumi/dtos';

@Controller('rounds')
export class RoundController {
  constructor(private roundService: RoundService) {}

  @Post()
  async create(@Body() createRoundDto: CreateRoundDto): Promise<RoundDto> {
    const newRound = await this.roundService.create(createRoundDto)
    return newRound
    }
  }
