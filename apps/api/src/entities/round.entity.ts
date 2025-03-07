import { Collection, Entity, ManyToMany, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core'
import { Game } from './game.entity.js'
import { PlayerChoice } from './playerChoice.entity.js'

@Entity()
export class Round {
  @PrimaryKey()
  id!: number

  @Property()
  roundNumber!: number

  @ManyToOne(() => Game)
  game!: Game

  @ManyToMany(() => PlayerChoice)
  playersChoices = new Collection<PlayerChoice>(this)

  @Property({ onCreate: () => new Date() })
  createdAt = new Date()

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date()
}
