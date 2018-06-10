'use strict';

console.log('App.js is running');

//var let const
var app = {
    title: 'Indicision App',
    subtitle: 'Put your life in hands of computer',
    options: ['one', 'two']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    console.log(e.target.elements.option.value);
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
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item'
        )
    ),
    React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'add option'
        )
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
