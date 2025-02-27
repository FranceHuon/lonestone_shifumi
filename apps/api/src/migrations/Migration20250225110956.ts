import { Migration } from '@mikro-orm/migrations';

export class Migration20250225110956 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`player\` (\`id\` integer not null primary key autoincrement, \`name\` text not null);`);

    this.addSql(`create table \`game\` (\`id\` integer not null primary key autoincrement, \`created_at\` datetime not null, \`updated_at\` datetime not null, \`player_one_id\` integer not null, \`player_two_id\` integer not null, constraint \`game_player_one_id_foreign\` foreign key(\`player_one_id\`) references \`player\`(\`id\`) on update cascade, constraint \`game_player_two_id_foreign\` foreign key(\`player_two_id\`) references \`player\`(\`id\`) on update cascade);`);
    this.addSql(`create index \`game_player_one_id_index\` on \`game\` (\`player_one_id\`);`);
    this.addSql(`create index \`game_player_two_id_index\` on \`game\` (\`player_two_id\`);`);

    this.addSql(`create table \`round\` (\`round_number\` integer not null, \`game_id\` integer not null, \`player_one_choice\` text not null, \`player_two_choice\` text not null, \`created_at\` datetime not null, \`updated_at\` datetime not null, constraint \`round_game_id_foreign\` foreign key(\`game_id\`) references \`game\`(\`id\`) on update cascade, primary key (\`round_number\`, \`game_id\`));`);
    this.addSql(`create index \`round_game_id_index\` on \`round\` (\`game_id\`);`);
  }

}
