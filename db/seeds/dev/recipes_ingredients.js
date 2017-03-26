exports.seed = function(knex, Promise) {
  return knex('recipes_ingredients').del()
  .then(() => {
    return Promise.all([
      knex('recipes_ingredients').insert({
        // id: 1,
        recipe_id: 1,
        ingredient_id: 1,
        quantity: '55 sprinkles',
        created_at: new Date
      }),
      knex('recipes_ingredients').insert({
        // id: 2,
        recipe_id: 1,
        ingredient_id: 2,
        quantity: '34 dozen',
        created_at: new Date
      }),
      knex('recipes_ingredients').insert({
        // id: 2,
        recipe_id: 4,
        ingredient_id: 1,
        quantity: '4 lbs',
        created_at: new Date
      }),
      knex('recipes_ingredients').insert({
        // id: 2,
        recipe_id: 4,
        ingredient_id: 3,
        quantity: '76 kilos',
        created_at: new Date
      })
    ]);
  });
};
