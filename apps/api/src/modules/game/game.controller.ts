import { Controller, Get } from "@nestjs/common";
import { GameService } from "./game.service.js";



@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService) {}

   @Get()
   findAll(): string {
    return 'This action returns all games';
   }
}
