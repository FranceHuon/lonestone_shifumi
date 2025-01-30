import { Body, Controller, Post } from "@nestjs/common";
import { PlayerService } from "./player.service.js";
import { CreatePlayerDto } from "@shifumi/dtos";

@Controller('players')
export class PlayerController {
    constructor(private playerService: PlayerService) {}
    
    @Post()
    async create(@Body() createPlayerDto: CreatePlayerDto) {
        return this.playerService.create(createPlayerDto)
    }

}