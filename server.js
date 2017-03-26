const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', process.env.PORT || 3000);

app.locals.title = 'Recipe API';

//first endpoint: /api/v1/recipe_by_user/:user_id
//second endpoint: /api/v1/ingredients_by_recipe/:recipe_id
//third endpoint: /api/v1/pantry_by_user/:user_id
//fourth endpoint: /api/v1/user/:user_id

app.get('/api/v1/users', (req, res) => {
  database('users').select()
  .then(users => {
    res.status(200).json(users)
  })
  .catch(error => {
    console.log(error)
  })
})

app.get('/api/v1/recipes', (req, res) => {
  database('recipes').select()
  .then(recipes => {
    res.status(200).json(recipes)
  })
  .catch(error => {
    console.log(error)
  })
})

app.get('/api/v1/ingredients', (req, res) => {
  database('ingredients').select()
  .then(ingredients => {
    res.status(200).json(ingredients)
  })
  .catch(error => {
    console.log(error)
  })
})

app.get('/api/v1/recipes_by_user/:user_id', (req, res) => {
  const {user_id} = req.params;

  database('users_recipes').where('user_id', user_id).select()
  .then(ids => {
    let idArray = ids.map((id) => {
      return id.recipe_id
    })
    database('recipes').whereIn('id', idArray).select()
    .then(recipes => {
      res.status(200).json(recipes)
    })
  })
  .catch(error => {
    console.log(error)
  })
})

app.get('/api/v1/ingredients_by_recipe/:recipe_id', (req, res) => {
  const {recipe_id} = req.params;

  database('recipes_ingredients').where('recipe_id', recipe_id).select()
  .then(ids => {
    let idArray = ids.map((id) => {
      return id.ingredient_id
    })
    database('ingredients').whereIn('id', idArray).select()
    .then(ingredients => {
      res.status(200).json(ingredients)
    })
  })
  .catch(error => {
    console.log(error)
  })
})

app.get('/api/v1/pantry_by_user/:user_id', (req, res) => {
  const {user_id} = req.params;

  database('pantrys').where('user_id', user_id).select()
  .then(pantry => {
    let idArray = pantry.map((id) => {
      return id.id
    })
    database('pantrys_ingredients').whereIn('pantry_id', idArray).select()
    .then(ids => {
      console.log(ids)
      let ingredientIdArray = ids.map((id) => {
        return id.ingredient_id
      })
      database('ingredients').whereIn('id', ingredientIdArray).select()
      .then(ingredients => {
        res.status(200).json(ingredients)
      })
    })
  })
  .catch(error => {
    console.log(error)
  })
})

app.post('/api/v1/users', (req, res) => {
  const {name} = req.body;
  const user = {name};

  database('users').insert(user)
  .returning('*')
  .then(response => {
    res.status(200).json(response[0])
  })
  .catch(error => {
    console.log(error)
  })
})

app.post('/api/v1/user_recipes/:user_id', (req, res) => {
  const {user_id} = req.params;
  const {info} = req.body;
  const recipe = {info};

  database('recipes').insert(recipe)
  .returning('id')
  .then(id => {
    const recipe_id = id[0]
    const users_recipe = {user_id, recipe_id}
    database('users_recipes').insert(users_recipe)
    .then(response => {
      database('users_recipes').select()
      .then(recipes => {
        res.status(200).json(recipes)
      })
    })
  })
  .catch(error => {
    console.log(error)
  })
})

app.patch('/api/v1/update_user/:user_id', (req, res) => {
  const {user_id} = req.params;
  const {name} = req.body;

  database('users').where('id', user_id).update(name)
  .returning('*')
  .then(user => {
    res.status(200).json(user)
  })
  .catch(error => {
    console.log(error)
  })
})

app.patch('/api/v1/update_pantry/:pantry_id', (req, res) => {
  const {pantry_id} = req.params;
  const {quantity} = req.body;

  database('pantrys_ingredients').where('id', pantry_id).update(quantity)
  .returning('*')
  .then(ingredient => {
    res.status(200).json(ingredient)
  })
  .catch(error => {
    console.log(error)
  })
})

app.patch('/api/v1/update_recipe/:recipe_ingredients_id', (req, res) => {
  const {recipe_ingredients_id} = req.params;
  const {quantity} = req.body;

  database('pantrys_ingredients').where('id', recipe_ingredients_id).update(quantity)
  .returning('*')
  .then(ingredient => {
    res.status(200).json(ingredient)
  })
  .catch(error => {
    console.log(error)
  })
})

app.delete('/api/v1/users/:user_id', (req, res) => {
  const {user_id} = req.params;

  database('users').where('id', user_id).del()
  .then(response => {
    database('users_recipes').where('user_id', user_id).del()
    .then(response => {
      database('pantys').where('user_id', user_id).del()
      .then(response => {
        res.status(200)
      })
    })
  })
  .catch(error => {
    console.log(error)
  })
})

app.delete('/api/v1/recipes/:recipe_id', (req, res) => {
  const {recipe_id} = req.params;

  database('recipes').where('id', recipe_id).del()
  .then(response => {
    database('users_recipes').where('recipe_id', recipe_id).del()
    database('recipes_ingredients').where('recipe_id', recipe_id).del()
    database('recipes').select()
    .then(recipes => {
      res.status(200).json(recipes)
    })
  })
  .catch(error => {
    console.log(error)
  })
})

app.delete('/api/v1/ingredients/:ingredient_id', (req, res) => {
  const {ingredient_id} = req.params;

  database('ingredients').where('id', ingredient_id).del()
  .then(response => {
    database('ingredients').select()
    .then(ingredients => {
      res.status(200).json(ingredients)
    })
  })
  .catch(error => {
    console.log(error)
  })
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
})

module.exports = app
