exports.seed = function(knex, Promise) {
  return knex('users').del()
  .then(() => {
    return Promise.all([
      knex('users').insert({
        name: 'Shua Small',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Bob Barker',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Shua Shua',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Mo',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Bekah Lundy',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Bob',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'John',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Jim',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Floyd',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Tim',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Meg',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Bud',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Max',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Leah',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Brighton',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Leonard',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Ron Swanson',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Tom Haverford',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Janet Snakehole',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Burt Maklin',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Donna Meagle',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Seinfeld',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Kramer',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'George Costanza',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Larry David',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Michael Scott',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Dwight Schrutte',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Pam Beasley',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Andy Bernard',
        created_at: new Date
      }),
      knex('users').insert({
        name: 'Stanley Hudson',
        created_at: new Date
      }),
    ]);
  });
};
