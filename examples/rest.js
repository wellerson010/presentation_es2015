

function somaComRest(...values){
    let soma = 0;

    for(let i = 0; i < values.length; i++){
        soma += values[i];
    }

    console.log(soma);
}

somaComRest(1,2,3,4,5); //15

