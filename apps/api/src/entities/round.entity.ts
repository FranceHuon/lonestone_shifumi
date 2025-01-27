import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { Game } from './game.entity';

@Entity()
export class Round {
  @PrimaryKey()
  id!: number;

  @Property()
  player1Choice!: string;

  @Property()
  player2Choice!: string;

  @Property({ type: 'date' })
  createdAt!: Date;

  @Property({ type: 'date' })
  updatedAt!: Date;

  @ManyToOne(() => Game)
  game!: Game;
}
