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

//ChallengeTIme
//Create a templateTwo var JSX expression
//wrap inside a  div
//  h1 => Rahul Shahare
//  p  => Age: 26
//  p  => Location: Pandharkawada
//then render the templateTwo var in render method  

var templateTwo = React.createElement(
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
        'Age: 26'
    ),
    React.createElement(
        'p',
        null,
        'Location: Pandharkawada'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
