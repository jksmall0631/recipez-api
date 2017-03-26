exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', function(table) {
            table.increments('id').primary();
            table.string('name');

            table.timestamps();
        }),

        knex.schema.createTable('users_recipes', function(table) {
            table.increments('id').primary();
            table.integer('user_id').references('id').inTable('users');
            table.integer('recipe_id').references('id').inTable('recipes');

            table.timestamps();
        }),

        knex.schema.createTable('recipes', function(table) {
            table.increments('id').primary();
            table.string('info');

            table.timestamps();
        }),

        knex.schema.createTable('recipes_ingredients', function(table) {
            table.increments('id').primary();
            table.integer('recipe_id').references('id').inTable('recipes');
            table.integer('ingredient_id').references('id').inTable('ingredients');
            table.string('quantity');

            table.timestamps();
        }),

        knex.schema.createTable('ingredients', function(table) {
            table.increments('id').primary();
            table.string('name');

            table.timestamps();
        }),

        knex.schema.createTable('pantrys_ingredients', function(table) {
          table.increments('id').primary();
          table.integer('pantry_id').references('id').inTable('pantrys');
          table.integer('ingredient_id').references('id').inTable('ingredients');
          table.string('quantity');

          table.timestamps();
        }),

        knex.schema.createTable('pantrys', function(table) {
            table.increments('id').primary();
            table.integer('user_id');

            table.timestamps();
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users_recipes'),
        knex.schema.dropTable('users'),
        knex.schema.dropTable('recipes_ingredients'),
        knex.schema.dropTable('recipes'),
        knex.schema.dropTable('pantrys_ingredients'),
        knex.schema.dropTable('ingredients'),
        knex.schema.dropTable('pantrys'),
    ])
};
