import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core'
import { Choice } from '@shifumi/dtos'
import { Player } from './player.entity.js'

@Entity()
export class PlayerChoice {
  @PrimaryKey()
  id!: number

  @Property()
  choice!: Choice

  @ManyToOne(() => Player)
  player!: Player
}
