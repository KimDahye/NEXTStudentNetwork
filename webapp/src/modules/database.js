var mysql = require('mysql');
var connectionPool = mysql.createPool({
  connectionLimit: 4,
  host: 'localhost',
  user: 'next',
  password: 'next!!@@##$$',
  database: 'NEXT'
});

module.exports = connectionPool;