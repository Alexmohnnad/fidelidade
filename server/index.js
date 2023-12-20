// 1 - Dependências
const express = require("express");
const app = express();
const db = require('./database')
const cors = require ("cors");

app.use(cors());
app.use(express.json());

app.post("/cadastro", (req, res)=>{
  const {nome} = req.body;
  const {cpf} = req.body;
  const {telefone} = req.body;
  const {datanascimento} = req.body;
  const {compra} = req.body;

  let sql = "INSERT INTO cliente (nome, cpf, telefone, datanascimento, compra) VALUES (?,?,?,?,?)" ;

  db.query(sql, [nome, cpf, telefone, datanascimento, compra],(err,result)=>{
    if (err) {
      return res.status(500).send({Msg: 'Deu ruim na conexão', erro: err});
    } else {
      return res.send(result); 
    }
  });
});

app.get("/consultacliente", (req, res)=>{
  const {nome} = req.body;
  const {cpf} = req.body;
  const {telefone} = req.body;
  const {datanascimento} = req.body;
  const {compra} = req.body;

  let sql = "SELECT * FROM cliente";

  db.query(sql, [nome, cpf, telefone, datanascimento, compra],(err,result)=>{
    if (err) {
      return res.status(500).send({Msg: 'Deu ruim na conexão', erro: err});
    } else {
      return res.send(result); 
    }
  });
});

app.put("/editar", (req, res)=>{
  const {id} = req.body;
  const {nome} = req.body;
  //const {cpf} = req.body;
  const {telefone} = req.body;
  //const {datanascimento} = req.body;
  const {compra} = req.body;

  let sql = "UPDATE cliente SET nome = ?, telefone = ?, compra = ? WHERE id = ?"

  db.query(sql, [nome, telefone, compra, id],(err, result)=>{
      if (err) {console.log(err)
      return res.status(500).send({Msg: 'Deu ruim na conexão', erro: err});
    } else {
      return res.send(result); 
    }
  });
});

app.delete("/delete/:id", (req, res)=>{
  const {id} = req.params;

  let sql = "DELETE FROM cliente WHERE ID = ?";

  db.query(sql, [id], (err, result)=>{
      if (err) {console.log(err)
      return res.status(500).send({Msg: 'Deu ruim na conexão', erro: err});
    } else {
      return res.send(result); 
    }
  });
});

app.listen(3001, () => {
    console.log("Servidor rodando");
});

// const router = express.Router();

// router.post('/', (req, res) =>{

//    const  {formData } = req.body;
//   const  { /*nome da variavel que está via req params*/ } = req.query;

//     //Realiza as paradas aqui ou chama o banco 

//     //const sql = `SELECT * FROM tb_clientes`;

//     db.getConnection((err, conn) => {
//         if (err) {
//           return res.status(500).send({Msg: 'Deu ruim na conexão', erro: err});
//         }
//         conn.query(sql, [], (error, results) => {
//           conn.release();
//           if(error){
//             return res.status(500).send({Msg: 'Deu ruim na conexão', erro: err}); 
//           } else {
//             return res.status(200).send({
//                 msg: 'Registro salvo com sucesso'
//             }); 
//           }
//         });
//     });

// })

// router.get('/', (req, res) => {
//     console.log('aloo')
//     return res.status(201).send({Msg: 'Deu ruim na conexão'});      
// });

// router.delete('/',  (req, res) =>{
    
// });
// router.put('/',  (req, res) =>{
    
// })

// app.use('/', router);

//module.exports = router;