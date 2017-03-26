exports.seed = function(knex, Promise) {
  return knex('recipes').del()
  .then(() => {
    return Promise.all([
      knex('recipes').insert({
        // id: 1,
        info: 'Stew',
        created_at: new Date
      }),
      knex('recipes').insert({
        // id: 2,
        info: 'Mashed Taters',
        created_at: new Date
      }),
      knex('recipes').insert({
        // id: 2,
        info: 'Mac Cheese',
        created_at: new Date
      }),
      knex('recipes').insert({
        // id: 2,
        info: 'Beef, just beef.',
        created_at: new Date
      })
    ]);
  });
};
