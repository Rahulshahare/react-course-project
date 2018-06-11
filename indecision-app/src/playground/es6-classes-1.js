//

class Person {
    constructor(name  = 'Anynomous'){
        this.name = name;
    }

    getGreeting(){
        return 'Hello';
    }
}

const me = new Person('Rahul Shahare');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());

