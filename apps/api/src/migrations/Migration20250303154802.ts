import { Migration } from '@mikro-orm/migrations';

export class Migration20250303154802 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`game\` (\`id\` integer not null primary key autoincrement, \`created_at\` datetime not null, \`updated_at\` datetime not null);`);

    this.addSql(`create table \`player\` (\`id\` integer not null primary key autoincrement, \`name\` text not null);`);

    this.addSql(`create table \`game_players\` (\`game_id\` integer not null, \`player_id\` integer not null, constraint \`game_players_game_id_foreign\` foreign key(\`game_id\`) references \`game\`(\`id\`) on delete cascade on update cascade, constraint \`game_players_player_id_foreign\` foreign key(\`player_id\`) references \`player\`(\`id\`) on delete cascade on update cascade, primary key (\`game_id\`, \`player_id\`));`);
    this.addSql(`create index \`game_players_game_id_index\` on \`game_players\` (\`game_id\`);`);
    this.addSql(`create index \`game_players_player_id_index\` on \`game_players\` (\`player_id\`);`);

    this.addSql(`create table \`round\` (\`round_number\` integer not null, \`game_id\` integer not null, \`player_one_choice\` text not null, \`player_two_choice\` text not null, \`created_at\` datetime not null, \`updated_at\` datetime not null, constraint \`round_game_id_foreign\` foreign key(\`game_id\`) references \`game\`(\`id\`) on update cascade, primary key (\`round_number\`, \`game_id\`));`);
    this.addSql(`create index \`round_game_id_index\` on \`round\` (\`game_id\`);`);
  }

}
