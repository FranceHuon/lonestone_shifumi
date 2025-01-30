import { Module } from "@nestjs/common";
import { PlayerController } from "./player.controller.js";
import { PlayerService } from "./player.service.js";

@Module({
    imports: [],
    controllers: [PlayerController],
    providers: [PlayerService],
})

export class PlayerModule {}