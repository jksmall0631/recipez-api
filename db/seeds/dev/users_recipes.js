exports.seed = function(knex, Promise) {
  return knex('users_recipes').del()
  .then(() => {
    return Promise.all([
      knex('users_recipes').insert({
        // id: 1,
        user_id: 1,
        recipe_id: 1,
        created_at: new Date
      }),
      knex('users_recipes').insert({
        // id: 2,
        user_id: 1,
        recipe_id: 2,
        created_at: new Date
      }),
      knex('users_recipes').insert({
        // id: 2,
        user_id: 2,
        recipe_id: 3,
        created_at: new Date
      }),
    ]);
  });
};
