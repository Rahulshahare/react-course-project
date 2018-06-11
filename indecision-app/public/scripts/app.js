'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Challenge time
//Setup the constructor to take name and age(default to 0)
//getDescription - Rahul shahare is 26 year(s) old.

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anynomous';

        _classCallCheck(this, Person);

        this.name = name;
    }

    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            //return 'Hello i am ' + this.name + '!';
            return 'Hi! i am ' + this.name;
        }
    }]);

    return Person;
}();

var me = new Person('Rahul Shahare');
console.log(me.getGreeting());

var other = new Person();
console.log(other.getGreeting());
