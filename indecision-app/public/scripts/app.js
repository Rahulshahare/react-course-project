"use strict";

//argument object - no longer bound with arrow functions

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

//this keyword - no longer bound
