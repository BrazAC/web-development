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
app.use(bodyParser.urlencoded({extended: true}))

//Adicionando funcao middlewaremorgan ao array do Express
//pra mostra as informacoes do request no terminal
app.use("/submit",morgan("combined"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

//Quando receber a request mostre o body da request (trabalhado
//pelo middleware body-parser em algo legivel) no terminal. 

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send("Forumlario enviado!");
});

app.listen(port, ()=>{
    console.log(`Server running and listen to por ${port}`);
});