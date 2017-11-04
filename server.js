const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.get('/', (request, response) => {
  response.sendfile('index.html');
});

app.get('/api/v1/users', (request, response) => {
  database('school_finder_users').select()
    .then((users) => {
      response.status(200).json(users);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.post('/api/v1/users', (request, response) => {
  let { user } = request.body

  for(let requiredParameter of ['username', 'email', 'street_address', 'oath_id']) {
    if(!request.body[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: {email: <String>, email: <String>, street_address: <String>, oath_id: <String> }. You are missing a '${requiredParameter}' property`})
    }
  }

  database('users').insert(user, 'id')
    .then(user => {
      response.status(201).json({ id: user[0] });
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.delete('/api/v1/user/:id', (request, response) => {
  const { id } = request.params;

  database('users').where({ id }).del()
    .then(user => {
      if (user) {
        return response.status(202).json(`User ${id} was deleted from database`);
      } else return response.status(422).json({ error: 'Not Found' });
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/favorites', (request, response) => {
  database('school_finder_users').select()
    .then((users) => {
      response.status(200).json(users);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});
