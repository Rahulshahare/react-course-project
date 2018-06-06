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
//Challenge time
//create app object title/subtitle
//use title/subtitle in the template
//render template
var app = {
    title: 'Oceangreen Technology',
    subtitle: 'We Work For Excellence'
};

var app2 = {
    title: 'Oceangreen Technology',
    subtitle: 'We Work For Excellence'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'h1',
        null,
        app2.title
    ),
    React.createElement(
        'p',
        null,
        app2.subtitle
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
