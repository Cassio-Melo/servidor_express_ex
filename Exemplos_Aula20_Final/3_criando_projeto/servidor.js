//importação o modulo HTTP nativo Node
const http = require('http');

//definindo o host e a porta do servidor
const hostname = '127.0.0.1'; //localhost
const port = 3000; //porta onde o servidor irá rodar

//criando o servidor
const server = http.createServer((req, res) =>{
    //definir o status da resposta e o tipo de conteudo (HTML)
    res.statusCode = 200; //solicitação bem sucedida
    res.setHeader('Content-Type', 'text/html'); //conteúdo em HTML

    //repondendo a mensagem, qdo a página for acessada
    res.end('<h1>Bem-vindo ao meu site!</h1>');
});
//o servidor começa a "escutar" as requisições
server.listen(port, hostname,()=>{
    console.log(`Servidor rondando em http://${hostname}:${port}/`);
});