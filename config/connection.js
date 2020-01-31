//Connection.js to Setup the code to connect NODE to MySQL
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
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
    console.log('burgers_db connecting err: ' + err.stack);
    return;
  }
  console.log('Connected burgers_db as id: ' + connection.threadId);
});

module.exports = connection;
