'use strict';

var nameVar = 'Wizkumar';
var nameVar = 'TGOD';
console.log('namevar', nameVar);
//var can be reassign and redeclare

var nameLet = "its ssaturday";
nameLet = "its Sunday";
console.log('nameLet', nameLet);
//let can be reassign but can not redeclare

var nameConst = 'Taylor';
console.log('nameConst', nameConst);
//const can not reassign or redeclare

//Block Scoping

var fullName = 'Rahul Shahare';
var firstName = void 0;
if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);
