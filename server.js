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

app.get('/api/v1/users', (req, res) => {
  database('users').select()
  .then(users => {
    res.status(200).json(users)
  })
  .catch(error => {
    res.sendStatus(404)
  })
})

app.get('/api/v1/recipes', (req, res) => {
  database('recipes').select()
  .then(recipes => {
    res.status(200).json(recipes)
  })
  .catch(error => {
    res.sendStatus(404)
  })
})

app.get('/api/v1/ingredients', (req, res) => {
  database('ingredients').select()
  .then(ingredients => {
    res.status(200).json(ingredients)
  })
  .catch(error => {
    res.sendStatus(404)
  })
})

app.get('/api/v1/recipes_by_user/:user_id', (req, res) => {
  const {user_id} = req.params;

  database('users_recipes').where('user_id', user_id).select()
  .then(ids => {
    if(ids.length > 0){
      let idArray = ids.map((id) => {
        return id.recipe_id
      })
      database('recipes').whereIn('id', idArray).select()
      .then(recipes => {
        res.status(200).json(recipes)
      })
    }else{
      res.sendStatus(404)
    }
  })
})

app.get('/api/v1/ingredients_by_recipe/:recipe_id', (req, res) => {
  const {recipe_id} = req.params;

  database('recipes_ingredients').where('recipe_id', recipe_id).select()
  .then(ids => {
    if(ids.length > 0){
      let idArray = ids.map((id) => {
        return id.ingredient_id
      })
      database('ingredients').whereIn('id', idArray).select()
      .then(ingredients => {
        res.status(200).json(ingredients)
      })
    }else{
      res.sendStatus(404)
    }
  })
})

app.get('/api/v1/pantry_by_user/:user_id', (req, res) => {
  const {user_id} = req.params;

  database('pantrys').where('user_id', user_id).select()
  .then(pantry => {
    if(pantry.length > 0){
      let idArray = pantry.map((id) => {
        return id.id
      })
      database('pantrys_ingredients').whereIn('pantry_id', idArray).select()
      .then(ids => {
        let ingredientIdArray = ids.map((id) => {
          return id.ingredient_id
      })
        database('ingredients').whereIn('id', ingredientIdArray).select()
        .then(ingredients => {
          res.status(200).json(ingredients)
        })
      })
    }else{
      res.sendStatus(404)
    }
  })
})

app.post('/api/v1/users', (req, res) => {
  const {name} = req.body;
  const user = {name};

  if(name){
    database('users').insert(user)
    .returning('*')
    .then(response => {
      res.status(200).json(response[0])
    })
  }else{
    res.sendStatus(422)
  }
})

app.post('/api/v1/user_recipes/:user_id', (req, res) => {
  const {user_id} = req.params;
  const {info} = req.body;
  const recipe_info = {info};

  if(info && user_id){
    database('recipes').insert(recipe_info)
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
  }else{
    res.sendStatus(422)
  }
})

app.post('/api/v1/recipes_ingredients/:recipe_id', (req, res) => {
  const {recipe_id} = req.params;
  const {name, quantity} = req.body;
  const ingredient = {name};

  if(recipe_id && name){
    database('ingredients').insert(ingredient)
    .returning('id')
    .then(id => {
      const ingredient_id = id[0]
      const recipes_ingredient = {ingredient_id, recipe_id, quantity}
      database('recipes_ingredients').insert(recipes_ingredient)
      .then(response => {
        database('users_recipes').select()
        .then(recipes => {
          res.status(200).json(recipes)
        })
      })
    })
  }else{
    res.sendStatus(422)
  }
})

app.patch('/api/v1/update_user/:user_id', (req, res) => {
  const {user_id} = req.params;
  const {name} = req.body;
  const username = {name}

  database('users').where('id', user_id).update(username)
  .returning('*')
  .then(user => {
    res.status(200).json(user)
  })
  .catch(error => {
    res.sendStatus(404)
  })
})

app.patch('/api/v1/update_pantry/:pantry_id', (req, res) => {
  const {pantry_id} = req.params;
  const {quantity} = req.body;
  const ingredient_quantity = {quantity}

  database('pantrys_ingredients').where('id', pantry_id).update(ingredient_quantity)
  .returning('*')
  .then(ingredient => {
    res.status(200).json(ingredient)
  })
  .catch(error => {
    res.sendStatus(404)
  })
})

app.patch('/api/v1/update_recipe/:recipe_ingredients_id', (req, res) => {
  const {recipe_ingredients_id} = req.params;
  const {quantity} = req.body;
  const ingredient_quantity = {quantity}

  database('pantrys_ingredients').where('id', recipe_ingredients_id).update(ingredient_quantity)
  .returning('*')
  .then(ingredient => {
    res.status(200).json(ingredient)
  })
  .catch(error => {
    res.sendStatus(404)
  })
})

app.delete('/api/v1/users/:user_id', (req, res) => {
  const {user_id} = req.params;

  database('users').where('id', user_id).del()
  .then(response => {
    database('users').select()
    .then(response => {
      res.status(200).json(response)
    })
  })
  .catch(error => {
    res.sendStatus(404)
  })
})

app.delete('/api/v1/recipes/:recipe_id', (req, res) => {
  const {recipe_id} = req.params;

  database('recipes_ingredients').where('recipe_id', recipe_id).del()
  database('users_recipes').where('recipe_id', recipe_id).del()
  .then(response => {
    database('recipes').where('id', recipe_id).del()
    .then(response => {
      database('recipes').select()
      .then(recipes => {
        res.status(200).json(recipes)
      })
    })
    .catch(error => {
      res.sendStatus(404)
    })
  })
})

app.delete('/api/v1/ingredients/:ingredient_id', (req, res) => {
  const {ingredient_id} = req.params;

  database('pantrys_ingredients').where('ingredient_id', ingredient_id).del()
  database('recipes_ingredients').where('ingredient_id', ingredient_id).del()
  .then(response => {
    database('ingredients').where('id', ingredient_id).del()
    .then(response => {
      database('ingredients').select()
      .then(ingredients => {
        res.status(200).json(ingredients)
      })
    })
    .catch(error => {
      res.sendStatus(404)
    })
  })
})

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  });
}

module.exports = app
