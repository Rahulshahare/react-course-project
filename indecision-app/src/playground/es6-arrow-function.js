//ES5 function
//const square = function (x){
//    return x * x;
//};

function square(x){
    return x * x;
};

console.log(square(9));

//ES6 Arrow Function

//const squareArrow = (x) =>{
//    return x * x;
//};

const squareArrow = (x) => x * x;

console.log(squareArrow(5));


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
