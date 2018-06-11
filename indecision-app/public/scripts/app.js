'use strict';

console.log('App.js is running');

//var let const
var app = {
    title: 'Indicision App',
    subtitle: 'Put your life in hands of computer',
    options: [],
    data: ''
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    //console.log(e.target.elements.option.value);
    var option = e.target.elements.option.value;

    if (option) {
        //console.log(option);
        app.options.push(option);
        e.target.elements.option.value = '';

        console.log(app.options);
        app.data = app.options.map(function (op) {
            return React.createElement(
                'li',
                { key: op },
                ' ',
                op,
                ' '
            );
        });
        //console.log(app.data);
        renderApp();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    app.data = '', renderApp();
};

var numbers = [10, 20, 30];

var appRoot = document.getElementById('app');
var renderApp = function renderApp() {
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
            'p',
            null,
            React.createElement(
                'button',
                { onClick: removeAll },
                'Remove All'
            )
        ),
        app.options.length,
        React.createElement(
            'ol',
            null,
            app.options.map(function (op, i) {
                return React.createElement(
                    'li',
                    { key: i },
                    ' ',
                    op,
                    ' ',
                    React.createElement(
                        'button',
                        { onClick: removeOption },
                        '*'
                    )
                );
            })
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

    ReactDOM.render(template, appRoot);
};

renderApp();
