const mysql = require('mysql')

const cn = mysql.createConnection({
    host    : 'db',
    user    : 'root',
    password: 'docker',
    database: 'docker',
    port    : 3306
})

module.exports = cn