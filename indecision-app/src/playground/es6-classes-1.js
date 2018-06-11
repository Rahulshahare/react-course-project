//Challenge time
//Setup the constructor to take name and age(default to 0)
//getDescription - Rahul shahare is 26 year(s) old.

class Person {
    constructor(name  = 'Anynomous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        //return 'Hello i am ' + this.name + '!';
        return`Hi! i am ${this.name}`;
    }
    getDescription(){
        return`${this.name} is ${this.age} year(s) old.`;
    }
}

const me = new Person('Rahul Shahare',26);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());

