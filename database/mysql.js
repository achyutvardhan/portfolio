var mysql = require('mysql2');
var con = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: 'root',
    databasec : 'contact_us'
});

module.exports = con.promise();