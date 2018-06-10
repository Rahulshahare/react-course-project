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

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
