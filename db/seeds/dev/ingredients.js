exports.seed = function(knex, Promise) {
  return knex('ingredients').del()
  .then(() => {
    return Promise.all([
      knex('ingredients').insert({
        // id: 1,
        name: 'brussel sproats',
        created_at: new Date
      }),
      knex('ingredients').insert({
        // id: 2,
        name: 'butter',
        created_at: new Date
      }),
      knex('ingredients').insert({
        // id: 2,
        name: 'cinnimon',
        created_at: new Date
      }),
      knex('ingredients').insert({
        // id: 2,
        name: 'lavender',
        created_at: new Date
      })
    ]);
  });
};
