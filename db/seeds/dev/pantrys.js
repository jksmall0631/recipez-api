exports.seed = function(knex, Promise) {
  return knex('pantrys').del()
  .then(() => {
    return Promise.all([
      knex('pantrys').insert({
        // id: 1,
        user_id: 1,
        created_at: new Date
      }),
      knex('pantrys').insert({
        // id: 2,
        user_id: 2,
        created_at: new Date
      }),
      knex('pantrys').insert({
        // id: 2,
        user_id: 3,
        created_at: new Date
      }),
      knex('pantrys').insert({
        // id: 2,
        user_id: 4,
        created_at: new Date
      })
    ]);
  });
};
