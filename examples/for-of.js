/*const array = [1, 2, 3, 4];

for (let item of array) {
    console.log(item);
}

class Person {
    constructor(city, name, age) {
        this.city = city;
        this.name = name;
        this.age = age;
    }
}

let person = new Person('Rio de Janeiro', 'Wellerson', 21);
for(let item of person){
    console.log(item);
}
*/


class Person {
    constructor(city, name, age) {
        this.city = city;
        this.name = name;
        this.age = age;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (!this._index) {
                    this._index = 0;
                }

                if (this._index < Object.keys(this).length) {
                    let property = Object.keys(this)[this._index];
                    this._index++;

                    if (property != '_index') {
                        return {
                            value: this[property],
                            done: false
                        }
                    }
                }
                return {
                    done: true
                }
            }
        }
    }
}

let person = new Person('Rio de Janeiro', 'Wellerson', 21);
for (let item of person) {
    console.log(item);
} 