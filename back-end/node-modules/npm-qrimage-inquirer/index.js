import inquirer from 'inquirer';
import qr_image from 'qr-image';
import fs from 'fs';

inquirer.prompt(
  [
    {
        //type : "input",
        name: "url",
        message: "Insert the target URL image: ",
    }
  ])
  .then((answers) => {
    {
        //Obtem a url armazenada no objeto answers
        const url = answers.url

        //Gera o qrcode usando a url
        var qr_png = qr_image.image(url, { type: 'png' });  
        qr_png.pipe(fs.createWriteStream('qr_img.png'));

        //Escreve um arquivo contendo a url
        fs.writeFile('url.txt', url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          }); 
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});




