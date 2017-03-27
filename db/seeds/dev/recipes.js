exports.seed = function(knex, Promise) {
  return knex('recipes').del()
  .then(() => {
    return Promise.all([
      knex('recipes').insert({
        info: 'Stew',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Mashed Taters',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Mac Cheese',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Beef, just beef.',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Lasagna',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Soup',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Spag',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Cookies',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Brownies',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Chicken',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Broccoli Casserole',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Eggs',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Breakfast Hash',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Tuna Salad',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Potato Salad',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Fruit Salad',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Salad',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Pizza',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Carnitas',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Tacos',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Tomato Soup',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Curry',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Spring Rolls',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Pasta Premavera',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Meatballs',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Icecream',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Pie',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Pho',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Sushi',
        created_at: new Date
      }),
      knex('recipes').insert({
        info: 'Dog Treats',
        created_at: new Date
      }),
    ]);
  });
};
