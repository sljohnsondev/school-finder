
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('sf_users', function(table) {
      table.increments('id').primary();
      table.string('username');
      table.string('email');
      table.string('address');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('sf_favorites', function(table) {
      table.increments('id').primary();
      table.string('favorite_id');
      table.string('favorite_name');
      table.string('favorite_code');
      table.integer('user_id').unsigned()
      table.foreign('user_id')
        .references('sf_users.id');

      table.timestamps(true, true);
    })
  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('sf_favorites'),
    knex.schema.dropTable('sf_users')
  ]);
};
