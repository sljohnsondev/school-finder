
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('username');
      table.string('email');
      table.string('street_address');
      table.string('oath_id');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('favorites', function(table) {
      table.increments('id').primary();
      table.string('school_name');
      table.string('school_address');
      table.string('school_website');
      table.string('school_id');
      table.string('school_code');
      table.string('commute_time');
      table.string('commute_distance');
      table.integer('user_id').unsigned()
      table.foreign('user_id')
        .references('users.id');

      table.timestamps(true, true);
    })
  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('favorites'),
    knex.schema.dropTable('users')
  ]);
};
