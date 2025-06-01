import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { listEstablishments, listPeople } from './dao.mjs';

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

// start the server
app.listen(port, () => { console.log(`API server started at http://localhost:${port}`); });