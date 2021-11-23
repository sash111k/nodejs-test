const Pool = require('pg').Pool;

console.log(process.env.DB_HOST)

const pool = new Pool({
    user: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: 5432,
    database: process.env.DB_NAME || 'postgres'
});



module.exports = pool;
