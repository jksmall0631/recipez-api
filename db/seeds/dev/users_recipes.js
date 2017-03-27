exports.seed = function(knex, Promise) {
  return knex('users_recipes').del()
  .then(() => {
    return Promise.all([
      knex('users_recipes').insert({
        user_id: 1,
        recipe_id: 1,
        created_at: new Date
      }),
      knex('users_recipes').insert({
        user_id: 1,
        recipe_id: 2,
        created_at: new Date
      }),
      knex('users_recipes').insert({
        user_id: 2,
        recipe_id: 3,
        created_at: new Date
      }),
      knex('users_recipes').insert({
        user_id: 12,
        recipe_id: 3,
        created_at: new Date
      }),
      knex('users_recipes').insert({
        user_id: 13,
        recipe_id: 10,
        created_at: new Date
      }),
      knex('users_recipes').insert({
        user_id: 22,
        recipe_id: 24,
        created_at: new Date
      }),
      knex('users_recipes').insert({
        user_id: 25,
        recipe_id: 23,
        created_at: new Date
      }),
      knex('users_recipes').insert({
        user_id: 26,
        recipe_id: 30,
        created_at: new Date
      }),
      knex('users_recipes').insert({
        user_id: 27,
        recipe_id: 28,
        created_at: new Date
      }),
      knex('users_recipes').insert({
        user_id: 30,
        recipe_id: 24,
        created_at: new Date
      }),
    ]);
  });
};
