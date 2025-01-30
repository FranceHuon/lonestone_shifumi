import { Migration } from '@mikro-orm/migrations';

export class Migration20250130102137 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`game\` add column \`player_one_id\` integer not null;`);
    this.addSql(`alter table \`game\` add column \`player_two_id\` integer not null;`);
  }

}
