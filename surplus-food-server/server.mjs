//import
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {check, validationResult} from 'express-validator';

import { listEstablishments } from './dao.mjs';

// init
const app = express();
const port = 3001;

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// ROUTES

// GET /api/questions
app.get('/api/establishments', (request, response) => {
  listEstablishments()
  .then(establishments => {
    setTimeout( () => {response.json(establishments)}, 2000)
  })
  .catch(() => response.status(500).end());
});

// start the server
app.listen(port, () => { console.log(`API server started at http://localhost:${port}`); });