import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { resolve } from 'path';

const configDatabase: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'db_local',
  port: 5432,
  username: 'reparo_rapido',
  password: 'reparo_rapido',
  database: 'reparo_rapido',
  synchronize: false,
  entities: [resolve(__dirname, '..', '..', '**/*.entity{.ts,.js}')],
  logging: process.env.NODE_ENV === 'development' ? ['query', 'schema'] : [],
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrations: [resolve(__dirname, '..', 'migrations/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export { configDatabase };
