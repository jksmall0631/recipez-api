const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server.js');
const expect = chai.expect;

process.env.NODE_ENV = 'test'

const environment = 'test';
const configuration = require('../knexfile.js')[environment];
const database = require('knex')(configuration);

chai.use(chaiHttp);

describe('Server', () => {

  beforeEach(function(done) {
    database.migrate.rollback()
    .then(function() {
      database.migrate.latest()
      .then(function() {
        return database.seed.run()
        .then(function() {
          done();
        });
      });
    });
  });

  afterEach(function(done) {
    database.migrate.rollback()
    .then(function() {
      done();
    });
  });

  it('should exist', () => {
    expect(app).to.exist;
  })

  describe('GET /api/v1/users', ()  => {
    it('should return a list of users', (done)  => {
      chai.request(app)
      .get('/api/v1/users')
      .end((err, res)  => {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(30);
        done();
      })
    });

    it('should return an error if the url does not exist', (done) => {
      chai.request(app)
      .get('/api/v1/users/436')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done()
      })
    })
  });

  describe('GET /api/v1/recipes', ()  => {
    it('should return a list of recipes', (done)  => {
      chai.request(app)
      .get('/api/v1/recipes')
      .end((err, res)  => {
        if(err){
          done(err);
        }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(30);
        done();
      });

      it('should return an error if the url does not exist', (done) => {
        chai.request(app)
        .get('/api/v1/recipes/436')
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.be.a('object');
          done()
        })
      })
    })
  });

  describe('GET /api/v1/ingredients', ()  => {
    it('should return a list of ingredients', (done)  => {
      chai.request(app)
      .get('/api/v1/ingredients')
      .end((err, res)  => {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(30);
        done();
      })
    });

    it('should return an error if the url does not exist', (done) => {
      chai.request(app)
      .get('/api/v1/users/436')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done()
      })
    })
  });

  describe('GET /api/v1/recipes_by_user/:user_id', ()  => {

    it('should return all recipes for single user', (done)  => {
      chai.request(app)
      .get('/api/v1/recipes_by_user/1')
      .end((err, res)  => {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(2);
        done();
      })
    });

    it('should return an error if the ID does not exist', (done) => {
      chai.request(app)
      .get('/api/v1/recipes_by_user/436')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done()
      })
    })
  });

  describe('GET /api/v1/ingredients_by_recipe/:recipe_id', ()  => {

    it('should return all ingredients for a specific recipe', (done)  => {
      chai.request(app)
      .get('/api/v1/ingredients_by_recipe/1')
      .end((err, res)  => {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(2);
        done();
      })
    });

    it('should return an error if the ID does not exist', (done) => {
      chai.request(app)
      .get('/api/v1/ingredients_by_recipe/666')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done()
      })
    })
  });

  describe('GET /api/v1/pantry_by_user/:user_id', ()  => {
    it('should return a users specific pantry ingredients', (done)  => {
      chai.request(app)
      .get('/api/v1/pantry_by_user/1')
      .end((err, res)  => {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(2);
        done();
      })
    });

    it('should return an error if the ID does not exist', (done) => {
      chai.request(app)
      .get('/api/v1/pantry_by_user/666')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done()
      })
    })
  });

  describe('POST /api/v1/users', ()  => {
    it('should create a new user', (done) => {
      const user = {
        'name': 'Joshua Small'
      }

      chai.request(app)
      .post('/api/v1/users')
      .send({
        name: user
      })
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('object');
        done();
      })
    });

    it('should error out if no body is entered', (done) => {
      chai.request(app)
      .post('/api/v1/users')
      .end((err, res) => {
        expect(res).to.have.status(422);
        expect(res).to.be.a('object')
        done();
      })
    })
  });

  describe('POST /api/v1/user_recipes/:user_id', ()  => {
    it('should add a new recipe', (done) => {
      chai.request(app)
      .post('/api/v1/user_recipes/1')
      .send({
        info: 'Lasagna',
      })
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.length(11);
        done();
      })
    });

    it('should error out if no body or params are entered', (done) => {
      chai.request(app)
      .post('/api/v1/user_recipes/1')
      .end((err, res) => {
        expect(res).to.have.status(422);
        expect(res).to.be.a('object')
        done();
      })
    })
  });

  describe('POST /api/v1/recipes_ingredients/:recipe_id', ()  => {
    it('should add a new ingredient', (done) => {
      chai.request(app)
      .post('/api/v1/recipes_ingredients/1')
      .send({
        name: 'noodles',
      })
      .end((err, res) => {
        if(err) { done(err) }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.length(11);
        done();
      })
    });

    it('should error out if no body or params are entered', (done) => {
      chai.request(app)
      .post('/api/v1/recipes_ingredients/1')
      .end((err, res) => {
        expect(res).to.have.status(422);
        expect(res).to.be.a('object')
        done();
      })
    })
  });

  describe('PATCH /api/v1/update_user/:user_id', (done)  => {
    it('should update the users name', (done) => {
      chai.request(app)
      .patch('/api/v1/update_user/1')
      .send({
        name: 'Puppo'
      })
      .end((error, res) => {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body[0].name).to.equal('Puppo')
        done()
      })
    });

    it('should return 404 if incorrect path is entered', (done)=> {
      chai.request(app)
      .post('/api/v1/1')
      .end((error, res)=> {
        expect(res).to.have.status(404)
        done()
      })
    })
  });

  describe('PATCH /api/v1/update_pantry/:pantry_id', (done)  => {
    it('should update the quantity in the pantry', (done) => {
      chai.request(app)
      .patch('/api/v1/update_pantry/1')
      .send({
        quantity: 56,
      })
      .end((error, res) => {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body[0].quantity).to.equal('56')
        done()
      })
    });

    it('should return 404 if incorrect path is entered', (done)=> {
      chai.request(app)
      .post('/api/v1/1')
      .end((error, res)=> {
        expect(res).to.have.status(404)
        done()
      })
    })
  });

  describe('PATCH /api/v1/update_recipe/:recipe_ingredients_id', (done)  => {
    it('should update the quantity in a recipe', (done) => {
      chai.request(app)
      .patch('/api/v1/update_recipe/1')
      .send({
        quantity: 56,
      })
      .end((error, res) => {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body[0].quantity).to.equal('56')
        done()
      })
    });

    it('should return 404 if incorrect path is entered', (done)=> {
      chai.request(app)
      .post('/api/v1/1')
      .end((error, res)=> {
        expect(res).to.have.status(404)
        done()
      })
    })
  });

  describe('DELETE /api/v1/users/:user_id', ()=> {
    it('should delete a user', (done)=> {
      chai.request(app)
      .delete('/api/v1/users/4')
      .end((error, res)=> {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body).to.have.length(res.body.length)
        done()
      })
    });
    it('should return 404 if incorrect path is entered', (done)=> {
      chai.request(app)
      .post('/api/v1/users/bla')
      .end((error, res)=> {
        expect(res).to.have.status(404)
        done()
      })
    })
  });

  describe('DELETE /api/v1/recipes/:recipe_id', ()=> {
    it('should delete a recipe', (done)=> {
      chai.request(app)
      .delete('/api/v1/recipes/10')
      .end((error, res)=> {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body).to.have.length(res.body.length)
        done()
      })
    });
    it('should return 404 if incorrect path is entered', (done)=> {
      chai.request(app)
      .post('/api/v1/recipes/bla')
      .end((error, res)=> {
        expect(res).to.have.status(404)
        done()
      })
    })
  });

  describe('DELETE /api/v1/ingredients/:ingredient_id', ()=> {
    it('should delete an ingredient', (done)=> {
      chai.request(app)
      .delete('/api/v1/ingredients/10')
      .end((error, res)=> {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body).to.have.length(res.body.length)
        done()
      })
    });
    it('should return 404 if incorrect path is entered', (done)=> {
      chai.request(app)
      .post('/api/v1/ingredients/bla')
      .end((error, res)=> {
        expect(res).to.have.status(404)
        done()
      })
    })
  });

});
