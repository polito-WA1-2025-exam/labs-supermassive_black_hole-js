import sqlite from 'sqlite3';
// open the database
const db = new sqlite.Database('surplus_db.sqlite', (err) => {
  if (err) throw err;
});

export default db;