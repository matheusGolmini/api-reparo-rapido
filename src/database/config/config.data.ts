import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { resolve } from 'path';

const configDatabase: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'db_local',
  port: 5432,
  username: 'root',
  password: 'password',
  database: 'wtp',
  synchronize: false,
  entities: [resolve(__dirname, '..', '..') + '/**/*.entity{.ts,.js}'],
  logging: process.env.NODE_ENV == 'development' ? ['query', 'schema'] : [],
};

export { configDatabase };
