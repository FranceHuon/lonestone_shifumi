import { Entity, PrimaryKey, Property, ManyToOne, OneToMany, Collection } from '@mikro-orm/core';
@Entity()
export class Game {
  @PrimaryKey()
  id!: number;

  @Property({ type: 'date' })
  createdAt!: Date;

  @Property({ type: 'date', nullable: true })
  updatedAt!: Date | null;
}
