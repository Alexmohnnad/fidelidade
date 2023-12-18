// 1 - Importa a biblioteca do mysql
const mysql = require("mysql");

// 2 - Cria a conexão com banco de dados
const db = mysql.createPool ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

module.exports =  db;



