import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { listEstablishments, listPeople, addPerson } from './dao.mjs';

// init
const app = express();
const port = 3001;

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// ROUTES

// GET /api/establishments
app.get('/api/establishments', (request, response) => {
  listEstablishments()
  .then(establishments => {
    setTimeout( () => {response.json(establishments)}, 2000)
  })
  .catch(() => response.status(500).end());
});

// GET /api/people
app.get('/api/people', (request, response) => {
  listPeople()
  .then(people => {
    response.json(people)
  })
  .catch(() => response.status(500).end());
});

// POST /api/people
app.post('/api/people', (request, response) => {
  const { name, surname } = request.body;
  
  addPerson(name, surname)
    .then(person => {
      response.status(201).json(person);
    })
    .catch(err => {
      console.error(err);
      response.status(500).json({ error: 'Failed to add person' });
    });
});

// start the server
app.listen(port, () => { console.log(`API server started at http://localhost:${port}`); });