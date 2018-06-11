//

class Person {
    constructor(name  = 'Anynomous'){
        this.name = name;
    }
}

const me = new Person('Rahul Shahare');
console.log(me);

const other = new Person();
console.log(other);

