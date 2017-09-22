/*const fakeClass = function(){
    this.value = 5;

    this.printValue = function(){
        console.log('Valor do fake class: ' + this.value);
        console.log('Quem é o this?', JSON.stringify(this));
    }
}

const fakeClassInstance = new fakeClass();
fakeClassInstance.printValue();

const fakeClass2 = function(object){
    this.value = 10;
    this.object = object;
    this.printValue = this.object.printValue;
}

new fakeClass2(fakeClassInstance).printValue();

setTimeout(fakeClassInstance.printValue, 1);

*/
/*
const fakeClass = function(){
    var Self = this;

    this.value = 5;

    this.printValue = function(){
        console.log('Valor do fake class: ' + Self.value);
        console.log('Quem é o self?', JSON.stringify(Self));
    }
}

const fakeClassInstance = new fakeClass();
fakeClassInstance.printValue();

const fakeClass2 = function(object){
    this.value = 10;
    this.object = object;
    this.printValue = this.object.printValue;
}

new fakeClass2(fakeClassInstance).printValue();

setTimeout(fakeClassInstance.printValue, 1);

*/

const fakeClass = function(){
    this.value = 5;

    this.printValue = () => {
        console.log('Valor do fake class 3: ' + this.value);
        console.log('Quem é o this?', JSON.stringify(this));
    }
}

const fakeClassInstance = new fakeClass();
fakeClassInstance.printValue();

const fakeClass2 = function(object){
    this.value = 10;
    this.object = object;
    this.printValue = this.object.printValue;
}

new fakeClass2(fakeClassInstance).printValue();

setTimeout(fakeClassInstance.printValue, 1);  