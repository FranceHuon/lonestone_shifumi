import { Migration } from '@mikro-orm/migrations';

export class Migration20250128105257 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`game\` (\`id\` integer not null primary key autoincrement, \`created_at\` date not null, \`updated_at\` date null);`);
  }

}
