const object = {
    0: 'Wellerson Roberto',
    1: 21,
    2: 'Rio de Janeiro',
    length: 3
}

const array = Array.from(object);
console.log(array);

function argumentsConvert(){
    return Array.from(arguments);
}

console.log(argumentsConvert(1,2,3));

console.log(Array.from({length: 10}, (data, index) => index));

console.log(Array.from(new Map([[1, 2], [2, 4], [4, 8]])));

console.log(Array.from("foo"));