const mysql = require('promise-mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'app'
})

function getConnection() {  
    return connection;
}

module.exports= {getConnection}
