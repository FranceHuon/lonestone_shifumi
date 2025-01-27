import type { Options } from '@mikro-orm/sqlite'
import { defineConfig } from '@mikro-orm/sqlite'
import { TsMorphMetadataProvider } from '@mikro-orm/reflection'
// import config from './config'

const ormConfig: Options = defineConfig({
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  dbName: 'shifumi.db',
 
  metadataProvider: TsMorphMetadataProvider,
  forceUtcTimezone: true,
  debug: true,
  
})

export default ormConfig
