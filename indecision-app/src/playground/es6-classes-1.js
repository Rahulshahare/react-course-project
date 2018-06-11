
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

class student extends Person{
    constructor(name,age,major){
        super(name, age);
        this.major = major;
    }
}

const me = new student('Rahul Shahare',26, 'Computer Engineer');
console.log(me);

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());

