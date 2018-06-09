'use strict';

//argument object - no longer bound with arrow functions

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

//this keyword - no longer bound

var user = {
    name: 'rahul',
    cities: ['pkd', 'mumbai', 'pune'],
    printPlacesLived: function printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function (city) {
            console.log(this.name + ' has lived in' + city);
        });
    }

};

user.printPlacesLived();
