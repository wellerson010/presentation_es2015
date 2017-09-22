const array = [1,2,3,4,5];

const arrayReduce = array.reduce(function(valorAnterior, valorAtual, index, array){
    return valorAnterior + valorAtual;
}); //initialValue pode ser passado

//reduceRight

console.log('Reduce: ' + arrayReduce);