'use strict';

console.log('App.js is running');

//var let const
var app = {
    title: 'Indicision App',
    subtitle: 'Put your life in hands of computer',
    options: ['one', 'two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Here are your options" : "No Options"
    )
);

var count = 0;
var addOne = function addOne() {
    console.log("addOne");
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    console.log("minusOne");
    if (count > 0) {
        count--;
    }

    renderCounterApp();
};
var reset = function reset() {
    console.log("Reset");
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count:',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
