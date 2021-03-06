import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql';

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // host: 'localhost',
    // user: 'root',
    // password: 'password',
    // database: 'cinema'
}); 



connection.connect();

console.log(connection);

export default connection;