exports.seed = function(knex, Promise) {
  return knex('pantrys_ingredients').del()
  .then(() => {
    return Promise.all([
      knex('pantrys_ingredients').insert({
        // id: 1,
        pantry_id: 1,
        ingredient_id: 3,
        quantity: '32 newtons',
        created_at: new Date
      }),
      knex('pantrys_ingredients').insert({
        // id: 2,
        pantry_id: 1,
        ingredient_id: 4,
        quantity: '30 cups',
        created_at: new Date
      }),
      knex('pantrys_ingredients').insert({
        // id: 2,
        pantry_id: 2,
        ingredient_id: 3,
        quantity: '3 pinches',
        created_at: new Date
      }),
      knex('pantrys_ingredients').insert({
        // id: 2,
        pantry_id: 3,
        ingredient_id: 1,
        quantity: '1 very large handful, like you know, a heaping pile',
        created_at: new Date
      })
    ]);
  });
};
