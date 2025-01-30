import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Player {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property({ nullable: true })
  avatar!: Buffer | null;
}
