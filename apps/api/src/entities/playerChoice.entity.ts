import { Entity, ManyToOne, Property } from '@mikro-orm/core'
import { Choice } from '@shifumi/dtos'
import { Player } from './player.entity.js'

@Entity()
export class PlayerChoice {
  @Property()
  choice!: Choice

  @ManyToOne(() => Player, { primary: true })
  player!: Player
}
