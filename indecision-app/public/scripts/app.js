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

var userName = "Wizkumar";

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
