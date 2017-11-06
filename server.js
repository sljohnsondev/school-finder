const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/build')));

app.set('port', process.env.PORT || 3001);

app.get('/', (request, response) => {
  response.sendfile('index.html');
});


app.get('/api/v1/users', (request, response) => {
  database('users').select()
    .then((users) => {
      response.status(200).json(users);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});


app.get('/api/v1/users/:id', (request, response) => {
  const { id } = request.params;

  database('users').where('oath_id', id).select()
    .then((user) => {
      if (user.length === 0) {
        return response.status(404).json({
          error: `Could not find user with an oath_id ${id}`,
        });
      }
      return response.status(200).json(user);
    })
    .catch((error) => {
      response.status(500).json(error);
    });
});


app.post('/api/v1/users', (request, response) => {
  const user = request.body;

  for (const requiredParameter of ['username', 'email', 'oath_id']) {
    if (!user[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { name: <String>, email: <String>, street_address: <String>, oath_id: <String>}. You're missing a '${requiredParameter}' property.` });
    }
  }

  database('users').insert(user, 'id')
    .then((userResponse) => {
      return response.status(201).json({ id: userResponse[0] });
    })
    .catch((error) => {
      return response.status(500).json({ error });
    });
});


app.put('/api/v1/users/:id', (request, response) => {
  const { id } = request.params;
  const user = request.body;

  for (const requiredParameter of ['username', 'email', 'street_address', 'oath_id']) {
    if (!user[requiredParameter]) {
      return response
        .status(422)
        .json({ error: `Expected format: { name: <String>, email: <String>, street_address: <String>, oath_id: <String>}. You're missing a '${requiredParameter}' property.` });
    }
  }

  database('users').where({ id }).update(user, 'id')
    .then((res) => {
      if (res.length === 0) {
        return response.status(404).json('User id not found');
      }
      return response.status(201).json(`User id:${id} was updated.`);
    })
    .catch((error) => {
      response.status(500).json(error);
    });
});


app.patch('/api/v1/users/:id', (request, response) => {
  const { id } = request.params;
  const user = request.body;

  database('users').where('id', id).update(user, '*')
    .then((data) => {
      if (!data.length) {
        return response.status(404).json('User id not found');
      }
      return response.status(201).json(`User with id: ${id} was updated.`);
    })
    .catch((error) => {
      response.status(500).json(error);
    });
});

app.get('/api/v1/favorites/:id', (request, response) => {
  const { id } = request.params;

  database('favorites').where('user_id', id).select()
    .then((favorites) => {
      if (favorites.length === 0) {
        return response.status(404).json({
          error: `Could not find favorites with associated with user_id: ${id}`,
        });
      }
      return response.status(200).json(favorites);
    })
    .catch((error) => {
      response.status(500).json(error);
    });
});

app.post('/api/v1/favorites', (request, response) => {
  const favorite = request.body;

  for (const requiredParameter of ['school_id', 'school_address', 'school_website', 'school_name', 'school_code', 'user_id']) {
    if (!favorite[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { school_id: <String>, school_address: <String>, school_website: <String>, school_name: <String>,  school_code: <String>, user_id: <String>}. You're missing a '${requiredParameter}' property.` });
    }
  }

  database('favorites').insert(favorite, '*')
    .then((user) => {
      response.status(201).json( user );
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.delete('/api/v1/favorites/:id', (request, response) => {
  const { id } = request.params;

  database('favorites').where('school_code', id ).del()
    .then((favorite) => {
      if (favorite) {
        return response.sendStatus(204);
      }
      return response.status(422).json({ error: 'Not Found' });
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});


app.listen(app.get('port'), () => {
  console.log(`User Data API is running on ${app.get('port')}.`);
});

module.exports = app;
