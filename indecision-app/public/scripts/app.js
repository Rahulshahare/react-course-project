'use strict';

console.log('App.js is running');

//JSX = Javascript XML

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Rahul Shahare'
    ),
    React.createElement(
        'p',
        null,
        'More info'
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'Hi this is one'
        ),
        React.createElement(
            'li',
            null,
            'Hi this is two'
        ),
        React.createElement(
            'li',
            null,
            'Hi this is three'
        ),
        React.createElement(
            'li',
            null,
            'Hi this is four'
        )
    )
);
var user = {
    name: 'Rahul',
    age: 26,
    Location: 'Pandharkawada'
};
var userName = "Wizkumar";
var userAge = 26;
var userLocation = 'Pandharkawada';

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userName
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        userAge
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        userLocation
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
