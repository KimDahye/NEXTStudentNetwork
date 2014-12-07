var mysql = require('mysql');
var connectionPool = mysql.createPool({
  connectionLimit: 4,
  host: 'localhost',
  user: 'network_viewer',
  password: 'viewer',
  database: 'next_network'
});

module.exports = connectionPool;