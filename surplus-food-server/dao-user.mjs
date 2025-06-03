import db from './db.mjs';
import crypto from 'crypto';


export const getUser = (email, password) => {
  return new Promise((resolve, reject) => {
    // The '?' corresponds to a parameter passed as an argument of db.get()
    const sql = 'SELECT * FROM user WHERE email = ?';
    db.get(sql, [email], (err, row) => {
      if (err) { 
        console.log('Database error:', err);
        reject(err); 
      }
      else if (row === undefined) { 
        console.log('User not found for email:', email);
        resolve(false); 
      }
      else {        
        const salt = row.salt;
        const db_hashedPassword = row.saltedPassword;
        const user = {id: row.id, email: row.email, name: row.name};
        
        // script that just does the password hashing, nothing special
        crypto.scrypt(password, salt, 32, function(err, hashedPassword) {
          if (err) reject(err);
          
          if(!crypto.timingSafeEqual(Buffer.from(db_hashedPassword, 'hex'), hashedPassword))
            resolve(false);
          else
            resolve(user);
        });
      }
    });
  });
};