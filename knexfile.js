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
  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/school_finder_users_test',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory:'./db/seeds/test'
    },
    useNullAsDefault: true
  }

};
