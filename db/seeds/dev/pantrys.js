exports.seed = function(knex, Promise) {
  return knex('pantrys').del()
  .then(() => {
    return Promise.all([
      knex('pantrys').insert({
        user_id: 1,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 2,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 3,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 4,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 5,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 6,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 7,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 8,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 9,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 10,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 11,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 12,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 13,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 14,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 15,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 16,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 17,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 18,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 19,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 20,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 21,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 22,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 23,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 24,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 25,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 26,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 27,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 28,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 29,
        created_at: new Date
      }),
      knex('pantrys').insert({
        user_id: 30,
        created_at: new Date
      }),
    ]);
  });
};
