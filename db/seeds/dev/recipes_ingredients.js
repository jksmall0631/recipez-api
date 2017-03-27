exports.seed = function(knex, Promise) {
  return knex('recipes_ingredients').del()
  .then(() => {
    return Promise.all([
      knex('recipes_ingredients').insert({
        recipe_id: 1,
        ingredient_id: 1,
        quantity: '55 sprinkles',
        created_at: new Date
      }),
      knex('recipes_ingredients').insert({
        recipe_id: 1,
        ingredient_id: 2,
        quantity: '34 dozen',
        created_at: new Date
      }),
      knex('recipes_ingredients').insert({
        recipe_id: 4,
        ingredient_id: 1,
        quantity: '4 lbs',
        created_at: new Date
      }),
      knex('recipes_ingredients').insert({
        recipe_id: 4,
        ingredient_id: 3,
        quantity: '76 kilos',
        created_at: new Date
      }),
      knex('recipes_ingredients').insert({
        recipe_id: 23,
        ingredient_id: 23,
        quantity: 'a pinch',
        created_at: new Date
      }),
      knex('recipes_ingredients').insert({
        recipe_id: 24,
        ingredient_id: 13,
        quantity: '1 cup',
        created_at: new Date
      }),
      knex('recipes_ingredients').insert({
        recipe_id: 14,
        ingredient_id: 23,
        quantity: '1/2 cup',
        created_at: new Date
      }),
      knex('recipes_ingredients').insert({
        recipe_id: 9,
        ingredient_id: 13,
        quantity: '3 tsp',
        created_at: new Date
      }),
      knex('recipes_ingredients').insert({
        recipe_id: 17,
        ingredient_id: 17,
        quantity: '1 lb',
        created_at: new Date
      }),
      knex('recipes_ingredients').insert({
        recipe_id: 27,
        ingredient_id: 29,
        quantity: '8 lbs',
        created_at: new Date
      }),
    ]);
  });
};
