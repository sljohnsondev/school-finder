// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/school_finder_users',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
