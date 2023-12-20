const dbConfig= require('../config/dbconfg')
// require('dotenv').config()
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD
// });

const db = require('knex')({
  client: 'mysql2',
  connection: dbConfig
});

module.exports=db