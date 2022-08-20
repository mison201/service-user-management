import { registerAs } from '@nestjs/config';
import { NamingStrategy } from '../typeorm';
import { configDb } from './consts';

export default registerAs(configDb, () => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  timezone: 'Z',
  logging: process.env.DB_LOGGING === 'true',
  autoLoadEntities: true,
  keepConnectionAlive: true,
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  namingStrategy: new NamingStrategy(),
}));
