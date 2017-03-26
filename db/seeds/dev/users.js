exports.seed = function(knex, Promise) {
  return knex('users').del()
  .then(() => {
    return Promise.all([
      knex('users').insert({
        // id: 1,
        name: 'Shua Small',
        created_at: new Date
      }),
      knex('users').insert({
        // id: 2,
        name: 'Bob Barker',
        created_at: new Date
      }),
      knex('users').insert({
        // id: 2,
        name: 'Shua Shua',
        created_at: new Date
      }),
      knex('users').insert({
        // id: 2,
        name: 'Kunta Kinte',
        created_at: new Date
      })
    ]);
  });
};
