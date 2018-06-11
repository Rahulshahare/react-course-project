//Challenge time
//Setup the constructor to take name and age(default to 0)
//getDescription - Rahul shahare is 26 year(s) old.

class Person {
    constructor(name  = 'Anynomous'){
        this.name = name;
    }

    getGreeting(){
        //return 'Hello i am ' + this.name + '!';
        return`Hi! i am ${this.name}`;
    }
}

const me = new Person('Rahul Shahare');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());

