"use strict";

var _arguments = arguments;
//argument object - no longer bound with arrow functions

var add = function add(a, b) {
    console.log(_arguments);
    return a + b;
};

console.log(add(55, 1));

//this keyword - no longer bound
