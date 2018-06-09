var nameVar = 'Wizkumar';
var nameVar = 'TGOD';
console.log('namevar', nameVar);
//var can be reassign and redeclare

let nameLet = "its ssaturday";
nameLet = "its Sunday";
console.log('nameLet', nameLet);
//let can be reassign but can not redeclare

const nameConst = 'Taylor';
console.log('nameConst', nameConst);
//const can not reassign or redeclare

//Block Scoping

const fullName = 'Rahul Shahare';
let firstName;
if (fullName){
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}

const getFirstName = (x) =>{
    return x.split(" ")[0];
};

const getFirstNameShorthand = (x,y,z) => x.split(y)[z];
//usage 
//getFirstNameShorthand("string","split key","needed arrow index");


console.log(getFirstName("rahul Shahare"));
//console.log(getFirstNameShorthand("Wiz Kumar"));
console.log(getFirstNameShorthand("Wiz Kumar"," ",0));
//returning wiz
console.log(getFirstNameShorthand("Wiz,Kumar,young",",",1));
//returning Kumar

