'use strict';

console.log('App.js is running');

//JSX = Javascript XML
//Now Starting Conditional Rendering in JSX
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
    name: 'Rahul Shahare',
    age: 26,
    location: 'Pandharkawada'
};

function getLocation() {
    return 'Unknown';
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        user.age
    ),
    React.createElement(
        'p',
        null,
        getLocation()
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
