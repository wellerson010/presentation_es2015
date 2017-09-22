function buildPromise(m) {
    return new Promise((resolve, reject) => {
        console.log('Iniciando promise de ' + m + ' milissegundos');
        setTimeout(function () {
            console.log('Fim do tempo da promise de ' + m + ' milissegundos');
            resolve(m);
        }, m);
    });
}

/*
Promise.all([buildPromise(3000), buildPromise(2000),  buildPromise(1000)]).then(values => {
    console.log('Valores: ' + values);   
    console.log('Array: ' + Array.isArray(values));
}); 
*/

Promise.all([Promise.reject(), buildPromise(3000), buildPromise(2000)]).then(values => {
    console.log('Valores: ' + values);   
    console.log('Array: ' + Array.isArray(values));
}, () => {
    console.log('Erro na promise');
}); 