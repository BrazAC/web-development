import express from "express";
const app = express();
const port = 3000;

import path from "path";
import url from 'url';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

//Mostrar dados se o numero do segundos for par
//Nao mostrar se for impar
app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render(__dirname+"/views/index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
