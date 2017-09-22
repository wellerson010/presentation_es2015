const fs = require('fs');

let path = './arquivo.txt';
let finalText = '';

function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            (err)?reject(err):resolve(data);
        });
    });
}

readFilePromise(path).then((data) => {
    finalText += data;
    return readFilePromise(path);
}).then((data) => {
    finalText += data;
    return readFilePromise(path);
}).then((data) => {
    finalText += data;
    return readFilePromise(path);
}).then((data) => {
    finalText += data;
    return readFilePromise(path);
}).then((data) => {
    finalText += data;
    return readFilePromise(path);
}).then((data) => {
    finalText += data;
    return readFilePromise(path);
}).then((data) => {
    finalText += data;
    console.log(finalText);
});