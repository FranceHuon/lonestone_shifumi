import { InjectRepository } from "@mikro-orm/nestjs";
import { Injectable } from "@nestjs/common";
import { EntityManager} from '@mikro-orm/core';
import { Game } from "../../entities/game.entity.js";

@Injectable()
export class GameService {
        private readonly game: Game[] = [];

        create(game: Game) {
            this.game.push(game)
        }

        findAll(): Game[] {
            return this.game
        }
    
}
   