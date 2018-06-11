
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

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        //console.log(greeting);
        if(this.hasHomeLocation()) {
            greeting += ` I'm Visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}
//Challenge Time
//Traveler->Person
//add support for homeLocation
//override getGretting
//1. hi i am rahul shahare, i'm visiting from pkd
//2. parent string

const me = new Traveler('Rahul Shahare',26, 'Pandharkawada');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());


