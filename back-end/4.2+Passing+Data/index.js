import express from "express";
import bodyParser from "body-parser";

import path from "path";
import url from 'url';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var status = {ready: false};

app.use("/submit", bodyParser.urlencoded({ extended: true }));

app.use("/submit", (req, res, next) => {
  var completeName = req.body.fName + req.body.lName;
  res.locals.letterAmount = completeName.length;
  next();
});

app.get("/", (req, res) => {
  status.ready = false;
  res.render(__dirname + "/views/index.ejs", status);
});

app.post("/submit", (req, res) => {
  status.ready = true;
  res.render(__dirname + "/views/index.ejs", status);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
