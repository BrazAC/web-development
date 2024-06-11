import express from 'express';
import bodyParser from 'body-parser';

import path from "path";
import url from 'url';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//-Middlewares
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

//-Routers handlers
app.get('/', (req, res) => {
    //Send homepage
    res.render(__dirname + "/views/index.ejs");
});

app.get('/games', (req, res) => {
    res.render(__dirname + "/views/games.ejs");
});

app.get('/esports', (req, res) => {
    res.render(__dirname + "/views/esports.ejs");
});

app.get('/trips', (req, res) => {
    res.render(__dirname + "/views/trips.ejs");
});

//Make a new post request
app.post('/newPost', (req, res) => {
    res.render(__dirname + "/views/games.ejs", {
        title: req.body.title,
        content: req.body.text
    });
});

app.listen(port, ()=>{
    console.log(`Rise and shine, listen to por ${port}`)
});