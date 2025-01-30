import type { Options } from '@mikro-orm/sqlite'
import { TsMorphMetadataProvider } from '@mikro-orm/reflection'
import { defineConfig, SqliteDriver } from '@mikro-orm/sqlite'
// import config from './config'

const ormConfig: Options = defineConfig({
  driver: SqliteDriver,
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  dbName: 'shifumi.db',
  metadataProvider: TsMorphMetadataProvider,
  forceUtcTimezone: true,
  debug: true,
  migrations: {
    path: './migrations',
    pathTs: './src/migrations',
  },

})

export default ormConfig
