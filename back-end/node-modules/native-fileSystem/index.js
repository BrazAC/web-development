//Require File system module
const fs = require("fs");


//Write a file in the ./ path
var data= "Hello from node JS!";
fs.writeFile("message0.txt", data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});


//Read a file in the ./ path
fs.readFile('./message0.txt', 'utf-8',(err, data) => {
    if (err) throw err;
    console.log(data);
}); 