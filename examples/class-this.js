class classe {
    constructor() {
        this.value = 5;

     //   GAMBIARRA
      
     /*
        this.displayValue = () => {
            console.log('Valor do fake class: ' + this.value);
            console.log('Quem é o this?', JSON.stringify(this));
        }*/
         
        this.displayValue = this.displayValue.bind(this);
        
    }

    /*
    :(((((( não funciona
    displayValue() => {
        console.log('Valor do fake class: ' + this.value);
        console.log('Quem é o this?', JSON.stringify(this));
    }

    displayValue = () => {
        console.log('Valor do fake class: ' + this.value);
        console.log('Quem é o this?', JSON.stringify(this));
    }
  */
  
    displayValue() {
        console.log('Valor da classe ' + this.value);
        console.log('Valor do this: ' + JSON.stringify(this));
    }

     
}

const classeInstance = new classe();
classeInstance.displayValue();

setTimeout(classeInstance.displayValue, 1);