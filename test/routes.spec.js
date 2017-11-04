process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

chai.use(chaiHttp);

describe('Client Routes', () => {
  it('should return the homepage with some text', (done) => {
    chai.request(server)
    .get('/')
    .end((error, response) => {
      response.should.have.status(200);
      response.should.be.html;
      response.res.text.should.include('School Finder');
      done();
    });
  });

  it('should return a 404 for a route that does not exist', (done) => {
    chai.request(server)
    .get('/school_loser')
    .end((error, response) => {
      response.should.have.status(404);
      done();
    });
  });
});

describe('API Routes', () => {
  before((done) => {
    database.migrate.latest()
      .then(() => {
        done();
      })
      .catch((error) => {
        console.log('Before error: ', error);
      });
  });

  beforeEach((done) => {
    database.seed.run()
      .then(() => done())
      .catch((error) => {
        console.log('Before each error: ', error);
      });
  });

  it('should return the all the user in our test database', (done) => {
    chai.request(server)
      .get('/api/v1/users')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.should.be.a('object');
        response.body.length.should.equal(1);
        done();
      });
  });

  it('should be able to return the user info by id', (done) => {
    chai.request(server)
      .get('/api/v1/users/1')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.should.be.a('object');
        response.body.length.should.equal(1);
        response.body[0].should.have.property('id');
        response.body[0].id.should.equal(1);
        response.body[0].should.have.property('username');
        response.body[0].username.should.equal('Dan Alvarez');
        response.body[0].should.have.property('email');
        response.body[0].email.should.equal('dan@dan.com');
        response.body[0].should.have.property('street_address');
        response.body[0].street_address.should.equal('1331 17th');
        response.body[0].should.have.property('oath_id');
        response.body[0].oath_id.should.equal('1');
        done();
      });
  });

  it('should return a 404 when trying to return a non existing user by id', (done) => {
    chai.request(server)
    .get('/api/v1/users/202020')
    .end((error, response) =>{
      response.should.have.status(404);
      response.body.error.should.equal('Could not find user with id 202020');
      done();
    });
  });

  it('should be able to add a user to the users db', (done) => {
    chai.request(server)
    .post('/api/v1/users')
    .send({
      "id": "2",
      "username": "Sam Johnson",
      "email": "s@mjohnson.com",
      "street_address": "1331 17th",
      "oath_id": "3"
    })
    .end((error, response) => {
      response.should.have.status(201);
      response.body.should.be.a('object');
      response.body.should.have.property('id');
      response.body.id.should.equal(2);
      done();
    });
  });

  it('should return a 422 error when we forget a requiredParameter' , (done) => {
    chai.request(server)
    .post('/api/v1/users')
    .send({
      "id": "3",
      "username": "Jonathan Beckman",
      "email": "jbexxy@man.com",
      "oath_id": "2"
    })
    .end((error, response) => {
      response.should.have.status(422);
      response.body.should.have.property('error');
      response.body.error.should.equal("Expected format: { name: <String>, email: <String>, street_address: <String>, oath_id: <String>}. You're missing a 'street_address' property.");
      done();
    });
  });

  it('should be able to update a user', (done) => {
    chai.request(server)
    .put('/api/v1/users/1')
    .send({
      "id": "1",
      "username": "Dan Alvarez",
      "email": "dan@dan.com",
      "street_address": "1234 Fake St.",
      "oath_id": "1"
    })
    .end((error, response) => {
      response.should.have.status(201);
      response.body.should.equal('User id:1 was updated.');
      done();
    });
  });

  it('should return a 404 when we try and update a non existing user', (done) => {
    chai.request(server)
    .put('/api/v1/users/1000')
    .send({
      "username": "Rick Sanchez",
      "email": "rick@sanchez.com",
      "street_address": "826 Morty Way.",
      "oath_id": "1000"
    })
    .end((error, response) => {
      response.should.have.status(404);
      response.body.should.equal('User id not found');
      done();
    });
  });

  describe('Favorites Table', () => {
    it('should return the all the favorites in our test database', (done) => {
      chai.request(server)
        .get('/api/v1/favorites')
        .end((error, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.should.be.a('object');
          response.body.length.should.equal(2);
          done();
        });
    });

    it('should be able to add a favorite to the db', (done) => {
      chai.request(server)
      .post('/api/v1/favorites')
      .send({
        "id": "3",
        "school_name": "George Washington High School",
        "school_id": "561",
        "school_code": "3378",
        "user_id": "1"
      })
      .end((error, response) => {
        response.should.have.status(201);
        response.body.should.have.property('id')
        response.body.id.should.equal(3)
        done();
      });
    });

    it('should return a 422 error when we forget a requiredParameter', (done) => {
      chai.request(server)
      .post('/api/v1/favorites')
      .send({
        "id": "3",
        "school_name": "George Washington High School",
        "school_address": "655 S. Monaco Parkway",
        "website_url": "http://gwhs.dpsk12.org",
        "school_id": "561",
        "user_id": "1"
      })
      .end((error, response) => {
        response.should.have.status(422);
        response.body.should.have.property('error');
        response.body.error.should.equal("Expected format: { school_id: <String>, school_name: <String>, school_address: <String>, website_url: <String>, school_code: <String>, user_id: <String>}. You're missing a 'school_code' property.");
        done();
      });
    });

    it('should be able to delete a favorite', (done) => {
      chai.request(server)
      .delete('/api/v1/favorites/2')
      .end((error, response) => {
        response.should.have.status(202);
        response.body.should.equal('Favorite 2 was deleted from database')
        done();
      });
    });

    it('should return a 422 when trying to delete a non existing favorite', (done) => {
      chai.request(server)
      .delete('/api/v1/favorites/2000')
      .end((error, response) => {
        response.should.have.status(422);
        response.body.should.have.property('error');
        response.body.error.should.equal('Not Found');
        done();
      });
    });

  });

});
