const express = require('express'); // Importa o módulo Express para criar o servidor.
const app = express(); // Cria uma instância do aplicativo Express.
const port = 3000; // Define a porta na qual o servidor vai escutar.

// Define uma rota GET para o endpoint '/'.

app.get('/users/:name', (req, rapp.get('/', (req, res) => { 
  // Responde com uma mensagem quando essa rota é acessada.
  res.send('Olá, Web II! Esse servidor usa Express!'); 
});es) =>{
  res.send("Usuário: "+ req.params.name);
})

// Inicia o servidor e faz com que ele escute na porta definida.
app.listen(port, () => { 
  // Exibe uma mensagem no console indicando que o servidor está em execução.
  console.log(`Servidor rodando em http://localhost:${port}`); 
});

