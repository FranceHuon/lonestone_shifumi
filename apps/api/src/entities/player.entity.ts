import { Collection, Entity, ManyToMany, PrimaryKey, Property } from '@mikro-orm/core'
import { Game } from './game.entity.js'

@Entity()
export class Player {
  @PrimaryKey()
  id!: number

  @Property()
  name!: string

  @ManyToMany(() => Game, game => game.players)
  games = new Collection<Game>(this)
}
