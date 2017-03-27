exports.seed = function(knex, Promise) {
  return knex('ingredients').del()
  .then(() => {
    return Promise.all([
      knex('ingredients').insert({
        name: 'brussel sproats',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'butter',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'cinnimon',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'lavender',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'maple syrup',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'slammy',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'grape',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'kiwi',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'goat cheese',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'rasp',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'egg',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'mustard',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'ham',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'flour',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'chips',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'sugar',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'coco pow',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'almonds',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'dates',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'mango',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'bread',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'crackers',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'honey',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'ground beef',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'chicken',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'basil',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'mint',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'pepper',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'salt',
        created_at: new Date
      }),
      knex('ingredients').insert({
        name: 'tomato',
        created_at: new Date
      }),
    ]);
  });
};
