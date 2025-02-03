import { MikroOrmModule } from '@mikro-orm/nestjs'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller.js'
import { AppService } from './app.service.js'
import ormConfig from './mikro-orm.config.js'
import { GameModule } from './modules/game/game.module.js'
import { PlayerModule } from './modules/player/player.module.js'
import { RoundModule } from './modules/round/round.module.js'

@Module({
  imports: [
    MikroOrmModule.forRoot(ormConfig),
    GameModule, PlayerModule, RoundModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
