import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
//Obtendo o caminho absoluto 
import path from "path";
import url from 'url';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//Adicionando funcoes middleware ao array de execucao do Express
//Usando urlencoded devido ao tipo de data (oriundo de um forumlario)
app.use("/submit", bodyParser.urlencoded({extended: true}))

//Adicionando funcao middleware morgan ao array do Express
//pra mostra as informacoes do request no terminal
app.use("/submit",morgan("combined"));

//Adicionano middleware custom
function logger (req, res, next){
    console.log(req.method);
    console.log(req.url);
    next();
}

app.use("/submit", logger);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

//Quando receber a request mostre o body da request (trabalhado
//pelo middleware body-parser em algo legivel) no terminal. 
app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send(`<h1>Seu login unido:</h1><p>${req.body.email + req.body.password}</p>`);
});

app.listen(port, ()=>{
    console.log(`Server running and listen to por ${port}`);
});