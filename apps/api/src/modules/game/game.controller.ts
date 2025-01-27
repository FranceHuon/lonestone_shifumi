import { Controller, Post } from "@nestjs/common";
import {GameService} from '../game/game.service'
import { Game } from "src/entities/game.entity";

@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService) {}

    @Post()
    async createGame(): Promise<Game>{
        return this.gameService.startNewGame()
    }
}