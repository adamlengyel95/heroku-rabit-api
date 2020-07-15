const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'eu-cdbr-west-03.cleardb.net',
    user: 'b4cf602dd5870f',
    password: 'c18df09a',
    database: 'heroku_06eb968c8f57dcb'
});

module.exports = connection;