import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { resolve } from 'path';

const configs: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
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

const ssl = () => {
  if (process.env.NODE_ENV !== 'development') {
    const value = { ...configs, ssl: { rejectUnauthorized: false } };
    return value;
  }
  return configs;
};

const configDatabase = ssl();

export { configDatabase };
