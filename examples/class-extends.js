class Animal {
    constructor(name){
        this.name = name;
    }

    talk(){
        console.log('Meu nome é: ' + this.name);
    }
}

class Cachorro extends Animal {
    constructor(){
        super('Cachorro');

        console.log('Exibindo nome do pai: ' + this.name);
    }
}

class Desconhecido extends Animal {
    constructor(name){
        super(name);
    }

    talk(){
        super.talk();
        console.log('hahaha');
    }
}

const animal = new Animal('Animal');
const cachorro = new Cachorro();
const desconhecido = new Desconhecido('Papagaio');

animal.talk();
cachorro.talk();
desconhecido.talk();