const express = require('express');
const app = express();
const port = 3000;

//usar app.route(), associa a rota os diferentes métodos HTTP
app.route('/item')
//para listar ou visualizar dados
    .get((req,res) => {
        res.send("Obtendo lista de itens");
    })
//adicionar item
    .post((req, res) => {
        res.send("Adicionando itens");
    })
//atualização de item
    .put((req, res) => {
        res.send("Atualizando lista de itens");
    })
//remove item
    .delete((req, res) =>{
        res.send("Deleta itens");
    });
app.listen(port, ()=>{
    console.log(`Servidor executando em http://localhost:${port}`);
})