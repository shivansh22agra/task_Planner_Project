import { join, resolve } from 'path';

const options = {
  type: 'postgres',
  host: 'localhost',
  synchronize: true,
  dropSchema: false,
  port: 5432,
  username: 'postgres',
  password: '123456789',
  database: 'task_planner',
  entities: [resolve(__dirname, '..', 'entity', '*')],
  migrations: [resolve(__dirname, '..', 'migrations', '*')],
  cli: {
    entitiesDir: join('src', 'db', 'entity'),
    migrationsDir: join('src', 'db', 'migrations'),
  },
};

module.exports = options;