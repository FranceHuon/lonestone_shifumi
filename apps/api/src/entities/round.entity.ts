import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core'
import { Game } from './game.entity.js'

@Entity()
export class Round {
  @PrimaryKey()
  id!: number

  @Property()
  playerOneChoice!: string

  @Property()
  playerTwoChoice!: string

  @Property({ onCreate: () => new Date() })
  createdAt = new Date()

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date()

  @ManyToOne(() => Game)
  game!: Game
}
