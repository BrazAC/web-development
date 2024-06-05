//Importando o package express
import express from 'express';

//Retorna um objeto "app"
const app = express();
const port = 3000;

//Usa o metodo listen do objeto app
app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})
//Escutando informacoes que vierem pela porta 3000, e 
//mostrar no terminal a mensagem quando o servidor comecara a ouvir

//O que o servidor deve fazer quando receber um request get para 
//enviar ao cliente o que esta no diretorio "/"
app.get("/", (req, res) => {
    res.send("Hello, word!");
    console.log(req.rawHeaders);
})