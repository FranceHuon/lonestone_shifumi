import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core'
import { Choice } from '@shifumi/dtos'
import { Game } from './game.entity.js'

@Entity()
export class Round {
  @PrimaryKey()
  roundNumber!: number

  @ManyToOne(() => Game, { primary: true })
  game!: Game

  @Property()
  playerOneChoice!: Choice

  @Property()
  playerTwoChoice!: Choice

  @Property({ onCreate: () => new Date() })
  createdAt = new Date()

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date()
}
