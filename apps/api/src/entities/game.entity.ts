import { Collection, Entity, ManyToMany, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core'
import { Player } from './player.entity.js'

@Entity()
export class Game {
  @PrimaryKey()
  id!: number

  @Property({ onCreate: () => new Date() })
  createdAt = new Date()

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date()

  @ManyToMany(() => Player)
  players = new Collection<Player>(this)
}
