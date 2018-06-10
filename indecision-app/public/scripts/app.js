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
    cities: ['pkd', 'mumbai', 'pune', 'NewCity'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        //const cityMessages = this.cities.map((city)=>{
        //    return this.name +' has been in ' + city;
        //});
        //const masg = cityMessages.length - 1;
        //return cityMessages[];
        return this.cities.map(function (city) {
            return _this.name + ' has been in ' + city;
        });
    }
};

console.log(user.printPlacesLived());
