import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core'
import { Game } from './game.entity.js'

@Entity()
export class Round {
  @PrimaryKey()
  id!: number

  @Property()
  player1Choice!: string

  @Property()
  player2Choice!: string

  @Property({ type: 'date' })
  createdAt!: Date

  @Property({ type: 'date' })
  updatedAt!: Date

  @ManyToOne(() => Game)
  game!: Game
}
