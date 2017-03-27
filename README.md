# Build your own Backend

### Overview

A server built with node-express that connects to a postgres db via knex. For testing we used Mocha and Chai. A total of 7 tables were used in order to store and maintain the relationships between ingredients, recipes and users.

### End Points

you can check out the following endpoints on [heroku](https://recipez-api.herokuapp.com/)

#### Get Requests

`GET`/api/v1/users
* returns a JSON array of all the users

`GET`/api/v1/recipes
* returns a JSON array of all the recipes available

`GET`/api/v1/ingredients
* returns a JSON array of all the ingredients available

`GET`/api/v1/recipes_by_user/:user_id
* returns a JSON array of all a specific users recipes

`GET`/api/v1/ingredients_by_recipe/:recipe_id
* returns a JSON array of all ingredients in a specific recipe

`GET`/api/v1/pantry_by_user/:user_id
* returns a JSON array off all ingredients in a specific users pantry

#### Post Requests

`POST`/api/v1/users
* stores a new user if a name is passed through the body

`POST`/api/v1/user_recipes/:user_id
* stores a new user recipe when a user_id is passed in params and info is passed in body

`POST`/api/v1/recipes_ingredients/:recipe_id
* allows one to add ingredients to a recipe when a recipe_id is passed in params, and name and quantity are passed in body

#### Patch Requests

`PATCH`/api/v1/update_user/:user_id
* allows updating the name of a specific user

`PATCH`/api/v1/update_pantry/:pantry_id
* allows the user to update the quantity of ingredients in the pantry

`PATCH`/api/v1/update_recipe/:recipe_ingredients_id
* allows the user to update the quantity of ingredients in a recipe

#### Delete Requests

`DELETE`/api/v1/users/:user_id
* allows user to delete a user and associated data

`DELETE`/api/v1/recipes/:recipe_id
* allows user to delete a recipe and associated data

`DELETE`/api/v1/ingredients/:ingredient_id
* allows user to delete ingredients and associated data

### Tests
![passing-tests-screenshot](http://imgur.com/a/v8FDu)
