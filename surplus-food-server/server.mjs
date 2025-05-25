//import
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {check, validationResult} from 'express-validator';
// import {listQuestions, getQuestion, listAnswersOf, addAnswer, updateAnswer, voteAnswer} from './dao.mjs';

// init
const app = express();
const port = 3001;

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

/* ROUTES */

// TODO

// start the server
app.listen(port, () => { console.log(`API server started at http://localhost:${port}`); });