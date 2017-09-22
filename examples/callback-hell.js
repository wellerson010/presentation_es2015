const fs = require('fs');

let path = './arquivo.txt';
let finalText = '';

console.log('Antes de chamar requisição');
fs.readFile(path, 'utf8', function (err, data) {
    console.log('Primeira função:' + data);
});
console.log('Depois de chamar requisição');

fs.readFile(path, 'utf8', function (err, data) {
    finalText += data;
    fs.readFile(path, 'utf8', function (err, data) {
        finalText += data;
        fs.readFile(path, 'utf8', function (err, data) {
            finalText += data;
            fs.readFile(path, 'utf8', function (err, data) {
                finalText += data;
                fs.readFile(path, 'utf8', function (err, data) {
                    finalText += data;
                    fs.readFile(path, 'utf8', function (err, data) {
                        finalText += data;
                        fs.readFile(path, 'utf8', function (err, data) {
                            finalText += data;
                            fs.readFile(path, 'utf8', function (err, data) {
                                finalText += data;
                                console.log(finalText);
                            });
                        });
                    });
                });
            });
        });
    });
});