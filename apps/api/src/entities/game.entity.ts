import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core'
import { Player } from './player.entity.js'

@Entity()
export class Game {
  @PrimaryKey()
  id!: number

  @Property({ type: 'date' })
  createdAt!: Date

  @Property({ type: 'date', nullable: true })
  updatedAt!: Date | null

  @ManyToOne(() => Player)
  playerOne!: Player

  @ManyToOne(() => Player)
  playerTwo!: Player
}
