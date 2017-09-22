function tag(strings, ...values){
    console.log('Strings: ' + strings); //incluindo os espaços
    console.log('Values: ' + values);

    let final = '',
        tag = strings[0].trim();

    for(let i=0; i < values.length; i++){
        final += `<${tag}>${values[i]}</${tag}>\n`;
    }

    return final;
}

console.log(tag`h1 ${'carro'} ${'casa'} ${'bola'}`);