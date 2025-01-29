import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { GameService } from "./game.service.js";
import { GameDto } from "@shifumi/dtos";


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
