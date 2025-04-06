import express from 'express';
import morgan from 'morgan';
import * as Dao from './data_structures.mjs';

const app = express();

app.use(express.json())
app.use(morgan('dev'))

// Define routes and web pages
app.get('/', (req, res) =>	{
	Dao.getEstablishments().then(list => {res.json(list)}).catch(() => res.status(500).end());
});

// Activate server
app.listen(3000, () =>	console.log('Server	ready')) ;