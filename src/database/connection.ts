import 'dotenv/config';
import knex from 'knex';

const connection =
  process.env.NODE_ENV === 'development'
    ? knex({
        client: process.env.DB_CLIENT,
        connection: {
          database: process.env.DB_NAME,
          user: process.env.DB_USER,
          password: process.env.DB_PASS,
        },
        useNullAsDefault: true,
      })
    : knex({
        client: process.env.TEST_DB_CLIENT,
        connection: {
          database: process.env.TEST_DB_NAME,
          user: process.env.TEST_DB_USER,
          password: process.env.TEST_DB_PASS,
        },
        useNullAsDefault: true,
      });

export default connection;
