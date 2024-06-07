import express from 'express'
import bodyParser from 'body-parser'
import ejs from 'ejs'

import path from "path";
import url from 'url';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const date = new Date();

    res.render(__dirname + "/views/index.ejs", {day: date.getDay()});
});

app.listen(port, ()=>{
    console.log(`Rise and shine listen on port ${port}`);
});