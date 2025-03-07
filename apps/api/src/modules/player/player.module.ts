import { Module } from '@nestjs/common'
import { NpcService } from '../npc/npc.service.js'
import { PlayerController } from './player.controller.js'
import { PlayerService } from './player.service.js'

@Module({
  imports: [],
  controllers: [PlayerController],
  providers: [PlayerService, NpcService],
})

export class PlayerModule {}
