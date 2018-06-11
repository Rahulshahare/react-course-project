
class Person {
    constructor(name  = 'Anynomous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return`Hi! i am ${this.name}`;
    }
    getDescription(){
        return`${this.name} is ${this.age} year(s) old.`;
    }
}

//Now making sub class of parent class

const me = new Person('Rahul Shahare',26);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());

