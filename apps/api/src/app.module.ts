import { MikroOrmModule } from '@mikro-orm/nestjs'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller.js'
import { AppService } from './app.service.js'
import ormConfig from './mikro-orm.config.js'
import { GameModule } from './modules/game/game.module.js'

@Module({
  imports: [
    MikroOrmModule.forRoot(ormConfig),
    GameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
