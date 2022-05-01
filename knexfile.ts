import * as Knex from 'knex';
import appConfig from './src/appConfig';

export default {
  development: {
    client: 'postgresql',
    connection: {
      host: appConfig.database.host,
      port: appConfig.database.port,
      database: appConfig.database.name,
      user: appConfig.database.username,
      password: appConfig.database.password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: `${__dirname}/src/db/migrations`,
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: appConfig.database.name,
      user: appConfig.database.username,
      password: appConfig.database.password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: appConfig.database.name,
      user: appConfig.database.username,
      password: appConfig.database.password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
