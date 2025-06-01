// The DAO provides an abstaction layer to the database.

/*
    The methods defined here are called in the server.mjs routes.
*/

import db from './db.mjs';
import { Establishment, Person } from './models.mjs';

// get all the establishments
export const listEstablishments = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM Establishment';
    db.all(sql, [], (err, rows) => {
      if (err)
        reject(err);
      else {
        const establishments = rows.map((e) => new Establishment(e.id, e.type, e.name, e.address, e.phone_number, e.category));
        resolve(establishments);
      }
    });
  });
}

// get all people
export const listPeople = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM people';
    db.all(sql, [], (err, rows) => {
      if (err)
        reject(err);
      else {
        const people = rows.map((p) => new Person(p.name, p.surname, p.id));
        resolve(people);
      }
    });
  });
}