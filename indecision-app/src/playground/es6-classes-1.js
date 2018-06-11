//

class Person {
    constructor(name){
        this.name = name || 'Anynomous'
    }
}

const me = new Person('Rahul Shahare');
console.log(me);

const other = new Person();
console.log(other);

