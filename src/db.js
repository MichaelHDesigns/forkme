const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // Your MySQL Password
  database: 'referral_system'
});

// Connect
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

module.exports = db;