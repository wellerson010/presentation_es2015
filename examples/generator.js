function* generatorBasic(){
    yield 1;
    yield 2;
    let input = yield 3;
    yield input;
}

let generatorBasicValue = generatorBasic();
console.log(generatorBasicValue.next().value);
console.log(generatorBasicValue.next().value);
console.log(generatorBasicValue.next().value);
console.log(generatorBasicValue.next(20).value);

function* generatorBasic2(){
    yield 10;
    yield 30;
    yield 50;
}

for(let g of generatorBasic2()){
    console.log(g);
}

function* generatorYieldArray(){
    yield* [10,30,50];
}

for(let g of generatorYieldArray()){
    console.log(g);
}