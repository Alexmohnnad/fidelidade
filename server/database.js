// 1 - Importa a biblioteca do mysql
const mysql = require("mysql");

// 2 - Cria a conexão com banco de dados
const db = mysql.createPool ({
    host: "localhost",
    user: "root",
    password: "trdfhiujhliujhyltrfdhtresdg",
    database: "fidelidade",
});

module.exports =  db;



