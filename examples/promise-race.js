function buildPromise(m, error = false) {
    return new Promise((resolve, reject) => {
        console.log('Iniciando promise de ' + m + ' milissegundos');
        setTimeout(function () {
            console.log('Fim do tempo da promise de ' + m + ' milissegundos');
            if (error) {
                reject(error);
            }
            else {
                resolve(m);
            }
        }, m);
    });
}

/*
Promise.race([buildPromise(3000), buildPromise(2000),  buildPromise(1000)]).then(value => {
    console.log('Valor: ' + value);   
});*/


Promise.race([buildPromise(2500, true), buildPromise(3000), buildPromise(2000)]).then(value => {
    console.log('Valor: ' + value);
}, () => {
    console.log('Erro na promise');
});