import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import session from 'express-session';
import { check, validationResult } from 'express-validator';

import { listEstablishments, listPeople, addPerson } from './dao.mjs';
import { getUser } from './dao-user.mjs';

// init
const app = express();
const port = 3001;

// middleware
app.use(express.json());
app.use(morgan('dev'));

// This is the cors middleware configuration
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
  credentials: true
};
app.use(cors(corsOptions));

// Passport setup
passport.use(new LocalStrategy({ usernameField: 'email' }, async function verify(username, password, cb) {
  const user = await getUser(username, password);
  if(!user)
    return cb(null, false, 'Incorrect username or password.');
    
  return cb(null, user);
}));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (user, cb) { 
  return cb(null, user);
  
});

const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()) {
    return next();
  }
  return res.status(401).json({error: 'Not authorized'});
}

// Session middleware (has to be put before the routes)
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.authenticate('session'));

// ROUTES

// login (POST)
app.post('/api/login', function(req, res, next) {
  console.log('Login attempt:', req.body); // Debug
  passport.authenticate('local', (err, user, info) => {
    if (err)
      return next(err);
    if (!user) {
      // display wrong login messages
      return res.status(401).send(info);
    }
    // success, perform the login
    req.login(user, (err) => {
      if (err)
        return next(err);
      
      // req.user contains the authenticated user, we send all the user info back
      return res.status(201).json(req.user);
    });
  })(req, res, next);
});

// logout (POST) - if there are private routes it has to be before isLoggedIn middleware
app.post('/api/logout', (req, res) => {
  req.logout(() => {
    res.end();
  });
});

// GET session - if there are private routes it has to be before isLoggedIn middleware
app.get('/api/session/current', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);  // user is stored in the session by passport
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
});

// Public routes
app.get('/api/establishments', (request, response) => {
  listEstablishments()
  .then(establishments => {
    setTimeout( () => {response.json(establishments)}, 2000)
  })
  .catch(() => response.status(500).end());
});

app.get('/api/people', (request, response) => {
  listPeople()
  .then(people => {
    response.json(people)
  })
  .catch(() => response.status(500).end());
});

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

// protected route example
// app.get('/api/protected-route', isLoggedIn, (req, res) => {
//   // rotta protetta
// });

// start the server
app.listen(port, () => { console.log(`API server started at http://localhost:${port}`); });