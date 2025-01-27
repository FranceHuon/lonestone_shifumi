import { InjectRepository } from "@mikro-orm/nestjs";
import { Injectable } from "@nestjs/common";
import { Game } from "src/entities/game.entity";
import { EntityManager, EntityRepository } from '@mikro-orm/core';

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(Game)
        private readonly em: EntityManager,
    ) {}
    async startNewGame(): Promise<Game> {
        const newGame = new Game();
        newGame.createdAt = new Date();
        newGame.updatedAt = new Date();
    
        await this.em.persistAndFlush(newGame);
    
        return newGame;
      }
}