"use strict";

//ES5 function
//const square = function (x){
//    return x * x;
//};

function square(x) {
    return x * x;
};

console.log(square(9));

//ES6 Arrow Function

//const squareArrow = (x) =>{
//    return x * x;
//};

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(5));

var getFirstName = function getFirstName(x) {
    return x.split(" ")[0];
};

var getFirstNameShorthand = function getFirstNameShorthand(x, y, z) {
    return x.split(y)[z];
};
//usage 
//getFirstNameShorthand("string","split key","needed arrow index");


console.log(getFirstName("rahul Shahare"));
//console.log(getFirstNameShorthand("Wiz Kumar"));
console.log(getFirstNameShorthand("Wiz Kumar", " ", 0));
//returning wiz
console.log(getFirstNameShorthand("Wiz,Kumar,young", ",", 1));
//returning Kumar
