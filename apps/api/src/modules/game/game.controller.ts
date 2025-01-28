import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { GameDto } from "../../../../../packages/dtos/src/gameDto.js"
import { GameService } from "./game.service.js";


@Controller('game')
export class GameController {
    constructor(private gameService: GameService) {}
    
   @Post()
   async create(@Body() gameDto: GameDto) {
    this.gameService.create(gameDto)
   }

   @Get(':id')
   findOne(@Param() params: any): string {
    console.log(params.id);
    return 'This action returns a #${params.id} game';
   }

   @Get()
   async findAll() {
    return this.gameService.findAll()
   }
}
