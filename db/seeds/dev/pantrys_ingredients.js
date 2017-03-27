exports.seed = function(knex, Promise) {
  return knex('pantrys_ingredients').del()
  .then(() => {
    return Promise.all([
      knex('pantrys_ingredients').insert({
        pantry_id: 1,
        ingredient_id: 3,
        quantity: '32 newtons',
        created_at: new Date
      }),
      knex('pantrys_ingredients').insert({
        pantry_id: 1,
        ingredient_id: 4,
        quantity: '30 cups',
        created_at: new Date
      }),
      knex('pantrys_ingredients').insert({
        pantry_id: 2,
        ingredient_id: 3,
        quantity: '3 pinches',
        created_at: new Date
      }),
      knex('pantrys_ingredients').insert({
        pantry_id: 3,
        ingredient_id: 1,
        quantity: '1 very large handful, like you know, a heaping pile',
        created_at: new Date
      }),
      knex('pantrys_ingredients').insert({
        pantry_id: 13,
        ingredient_id: 13,
        quantity: '4 tsp',
        created_at: new Date
      }),
      knex('pantrys_ingredients').insert({
        pantry_id: 13,
        ingredient_id: 23,
        quantity: '5 cups',
        created_at: new Date
      }),
      knex('pantrys_ingredients').insert({
        pantry_id: 3,
        ingredient_id: 4,
        quantity: '1 lb',
        created_at: new Date
      }),
      knex('pantrys_ingredients').insert({
        pantry_id: 3,
        ingredient_id: 15,
        quantity: '7 sprinkles',
        created_at: new Date
      }),
      knex('pantrys_ingredients').insert({
        pantry_id: 23,
        ingredient_id: 18,
        quantity: '6 lbs',
        created_at: new Date
      }),
      knex('pantrys_ingredients').insert({
        pantry_id: 30,
        ingredient_id: 19,
        quantity: '1 loaf',
        created_at: new Date
      }),
    ]);
  });
};
