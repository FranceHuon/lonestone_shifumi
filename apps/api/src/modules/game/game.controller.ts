import { Controller, Post } from "@nestjs/common";
import { GameService } from "./game.service.js";
import { Game } from "../../entities/game.entity.js";


@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService) {}

    @Post()
    async createGame(): Promise<Game>{
        return this.gameService.startNewGame()
    }
}