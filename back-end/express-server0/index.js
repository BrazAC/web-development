import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server initialized and listening on port ${port}`);
})

//O que o servidor deve fazer ao receber um request get para
//o endpoint "/"
app.get("/", (req, res) => {
    res.send("Homepage!");
})

//O que o servidor deve fazer ao receber um request get para
//o endpoint "/contact"
app.get("/contact", (req, res) => {
    res.send("Contact page!")
})

//O que o servidor deve fazer ao receber um request get para
//o endpoint "/about"
app.get("/about", (req, res) => {
    res.send("About page!")
})

app.post("/", (req, res)=>{
    res.sendStatus(200)
})