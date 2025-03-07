import { Migration } from '@mikro-orm/migrations';

export class Migration20250306143142 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`game\` (\`id\` integer not null primary key autoincrement, \`created_at\` datetime not null, \`updated_at\` datetime not null);`);

    this.addSql(`create table \`player\` (\`id\` integer not null primary key autoincrement, \`name\` text not null, \`is_npc\` integer not null default false);`);

    this.addSql(`create table \`game_players\` (\`game_id\` integer not null, \`player_id\` integer not null, constraint \`game_players_game_id_foreign\` foreign key(\`game_id\`) references \`game\`(\`id\`) on delete cascade on update cascade, constraint \`game_players_player_id_foreign\` foreign key(\`player_id\`) references \`player\`(\`id\`) on delete cascade on update cascade, primary key (\`game_id\`, \`player_id\`));`);
    this.addSql(`create index \`game_players_game_id_index\` on \`game_players\` (\`game_id\`);`);
    this.addSql(`create index \`game_players_player_id_index\` on \`game_players\` (\`player_id\`);`);

    this.addSql(`create table \`player_choice\` (\`id\` integer not null primary key autoincrement, \`choice\` Choice not null, \`player_id\` integer not null, constraint \`player_choice_player_id_foreign\` foreign key(\`player_id\`) references \`player\`(\`id\`) on update cascade);`);
    this.addSql(`create index \`player_choice_player_id_index\` on \`player_choice\` (\`player_id\`);`);

    this.addSql(`create table \`round\` (\`id\` integer not null primary key autoincrement, \`round_number\` integer not null, \`game_id\` integer not null, \`created_at\` datetime not null, \`updated_at\` datetime not null, constraint \`round_game_id_foreign\` foreign key(\`game_id\`) references \`game\`(\`id\`) on update cascade);`);
    this.addSql(`create index \`round_game_id_index\` on \`round\` (\`game_id\`);`);

    this.addSql(`create table \`round_players_choices\` (\`round_id\` integer not null, \`player_choice_id\` integer not null, constraint \`round_players_choices_round_id_foreign\` foreign key(\`round_id\`) references \`round\`(\`id\`) on delete cascade on update cascade, constraint \`round_players_choices_player_choice_id_foreign\` foreign key(\`player_choice_id\`) references \`player_choice\`(\`id\`) on delete cascade on update cascade, primary key (\`round_id\`, \`player_choice_id\`));`);
    this.addSql(`create index \`round_players_choices_round_id_index\` on \`round_players_choices\` (\`round_id\`);`);
    this.addSql(`create index \`round_players_choices_player_choice_id_index\` on \`round_players_choices\` (\`player_choice_id\`);`);
  }

}
