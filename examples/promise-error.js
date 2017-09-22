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

//sem tratamento de erro
/*
readFilePromise(path).then((data) => {
    finalText += data;
    return readFilePromise(path);
}).then((data) => {
    finalText += data;
    return readFilePromise(path + 'aaaa');

//catch
readFilePromise(path).then((data) => {
    finalText += data;
    return readFilePromise(path);
}).then((data) => {
    finalText += data;
    return readFilePromise(path + 'aaaa');
}).catch(err => {
    console.log('\nErro', JSON.stringify(err));
    return 0;
}).then(data => {
    console.log('Erro tratado. Continuando promise');
    finalText += data;
    return readFilePromise(path);
}).then(data => {
   finalText += data;
   console.log('Promise finalizada: ' + finalText);
});

*/
//segundo parâmetro then
readFilePromise(path).then((data) => {
    finalText += data;
    return readFilePromise(path);
}).then((data) => {
    finalText += data;
    return readFilePromise(path + 'aaaa');
}).then(data => {
   finalText += data;
   return readFilePromise(path);
}, err => {
    console.log('\nErro', JSON.stringify(err));
    return 0;
}).then(data => {
    console.log(data);
}); 