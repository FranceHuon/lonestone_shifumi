import { EntityManager } from "@mikro-orm/sqlite";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RoundService {
    constructor(private readonly em: EntityManager) {}
}