var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost:8080',
  user     : 'sampleusername',
  password : 'samplepassword',
  database : 'sambledb'
});
 
connection.connect();

global.db = connection;