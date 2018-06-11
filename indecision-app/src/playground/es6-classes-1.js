
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
    hasMajor(){
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()){
            description +=  ` Their major is ${this.major}.`;

        }
        return description ;
    }
}

//Challenge Time
//Traveler->Person
//add support for homeLocation
//override getGretting
//1. hi i am rahul shahare, i'm visiting from pkd
//2. parent string

const me = new student('Rahul Shahare',26, 'Computer Engineer');
console.log(me.getDescription());

const other = new student();
console.log(other.getDescription());


