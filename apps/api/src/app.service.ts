import { MikroORM } from '@mikro-orm/core'
import { EntityManager } from '@mikro-orm/sqlite'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  constructor(private readonly orm: MikroORM, private readonly em: EntityManager) {
  }
}
