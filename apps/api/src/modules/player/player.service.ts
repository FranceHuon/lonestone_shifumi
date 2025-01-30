import { EntityManager } from "@mikro-orm/sqlite";
import { Injectable } from "@nestjs/common";
import { Player } from "../../entities/player.entity.js";
import { CreatePlayerDto } from "@shifumi/dtos";

@Injectable()
export class PlayerService {
    constructor(private readonly em: EntityManager) {}

    async create(createPlayerDto: CreatePlayerDto) {
        return await this.em.transactional(async (em) => {
            const {name } = createPlayerDto

            const player = em.create(Player, {
                name,
            })
            await em.persistAndFlush(player)
            return player
        })
    }
}