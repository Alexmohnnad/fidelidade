// 1 - Dependências
const express = require("express");
const app = express();
const db = require('./database')

app.listen(3001, () => {
    console.log("Server started successfully");
})

const router = express.Router();

router.post('/', (req, res) =>{

    const  {formData } = req.body;
    const  { /*nome da variavel que está via req params*/ } = req.query;

    //Realiza as paradas aqui ou chama o banco 

    const sql = `SELECT * FROM tb_clientes`;

    db.getConnection((err, conn) => {
        if (err) {
          return res.status(500).send({Msg: 'Deu ruim na conexão', erro: err});
        }
        conn.query(sql, [], (error, results) => {
          conn.release();
          if(error){
            return res.status(500).send({Msg: 'Deu ruim na conexão', erro: err}); 
          } else {
            return res.status(200).send({
                msg: 'Registro salvo com sucesso'
            }); 
          }
        });
    });

})

router.get('/cadcliente', (req, res) => {
    console.log('aloo')
    return res.status(201).send({Msg: 'Deu ruim na conexão'});      
});

router.delete('/',  (req, res) =>{
    
});
router.put('/',  (req, res) =>{
    
})

app.use('/', router);

module.exports = router;