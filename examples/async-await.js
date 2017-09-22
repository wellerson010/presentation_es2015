const fs = require('fs');

function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            (err) ? reject(err) : resolve(data);
        });
    });
}
/*
(async function () {
    let path = './arquivo.txt';
    let finalText = await readFilePromise(path);
    finalText += await readFilePromise(path);
    finalText += await readFilePromise(path);
    finalText += await readFilePromise(path);
    finalText += await readFilePromise(path);

    console.log('Texto final: ' + finalText);
    return finalText;
})().then(data => {
    console.log('No final de contas, eu sou uma promise! Texto final: ' + data);
});
*/
(async function () {
    let path = './arquivo.txt';
    let finalText = await readFilePromise(path);
    finalText += await readFilePromise(path);
    finalText += await readFilePromise(path + 'ssss');
    
    try {
     
    }
    catch (e) {
        console.log('Entrei dentro do try catch :D', JSON.stringify(e));
    } 
    
    finalText += await readFilePromise(path);
    finalText += await readFilePromise(path);

    console.log('Texto final: ' + finalText);
    return finalText;
})().then(data => {
    console.log('No final de contas, eu sou uma promise! Texto final: ' + data);
}).catch(error => {
    console.log('Erro!');
});