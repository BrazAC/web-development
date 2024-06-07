//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express"
//import bodyParser from "body-parser"
//Getting the absolute path
import path from "path";
import url from 'url';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//Adding middleware functions
app.use("/check", express.urlencoded({extended: true}));


//Method: GET Endpoint: / Action: send index.html to client
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

//Method: POST Endpoint: /check Action: 
//if req.body.password == ILoveProgramming send secret.html to client
//if req.body.password != ILoveProgramming send index.html to client
//*Atention to use absolute path and parse the req.body
app.post("/check", (req, res) => {
    if(req.body.password == "ILoveProgramming"){
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        res.sendFile(__dirname + "/public/index.html");
    }
})


app.listen(port, () => {
    console.log(`Rise and shine listen on port ${port}`);
})
