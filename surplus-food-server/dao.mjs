import db from './db.mjs';
import { Establishment } from './models.mjs';

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