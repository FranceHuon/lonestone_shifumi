import { Entity, PrimaryKey, Property, ManyToOne, OneToMany, Collection } from '@mikro-orm/core';
// import { Player } from './player.entity.js';
// import { Round } from './round.entity.js';



@Entity()
export class Game {
  @PrimaryKey()
  id!: number;

  @Property({ type: 'date' })
  createdAt!: Date;

  @Property({ type: 'date', nullable: true })
  updatedAt!: Date | null;

  // @ManyToOne(() => Player)
  // player1!: Player;

  // @ManyToOne(() => Player)
  // player2!: Player;

  // @OneToMany(() => Round, round => round.game)
  // rounds = new Collection<Round>(this);
}
