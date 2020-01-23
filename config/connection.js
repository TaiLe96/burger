//Connection.js to Setup the code to connect NODE to MySQL
var mysql = require('mysql');
var connection;

if (process.env.JAWDB_URL) {
  connection = mysql.createConnection(process.env.JAWDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'burgers_db'
  });
}

connection.connect(function(err) {
  if (err) {
    console.err('burger_db connecting err: ' + err.stack);
    return;
  }
  console.log('Connected burger_db as id: ' + connection.threadId);
});

module.exports = connection;
