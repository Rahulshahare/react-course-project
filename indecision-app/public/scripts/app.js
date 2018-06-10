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
        renderApp();
        console.log(app.options);
        //app.data = app.options.map((op)=>'<p>' + op + '</p>')
        //console.log(app.data);
    }
};

var removeAll = function removeAll() {
    app.options = [];
    renderApp();
};

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

        //Arrays
        [React.createElement(
            'p',
            { key: '1' },
            'a'
        ), React.createElement(
            'p',
            { key: '2' },
            'b'
        ), React.createElement(
            'p',
            { key: '3' },
            'c'
        )],
        React.createElement(
            'p',
            null,
            React.createElement(
                'button',
                { onClick: removeAll },
                'Remove All'
            )
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'No of option are ',
                app.options.length
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

    ReactDOM.render(template, appRoot);
};

renderApp();
