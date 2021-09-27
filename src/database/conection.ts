import { Pool } from 'pg';

export const createConection = async () => {
  const client = new Pool({
    user: 'postgres',
    host: 'postgres_bd',
    database: 'node-pg',
    password: 'docker',
    port: 5432,
  });

  await client.connect();

  return client;
};
