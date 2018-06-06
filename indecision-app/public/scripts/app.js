'use strict';

console.log('App.js is running');

//JSX = Javascript XML

var template = React.createElement(
               'div',
               null,
               React.createElement(
                              'h1',
                              null,
                              'This is changing.'
               ),
               React.createElement(
                              'p',
                              null,
                              'More info'
               )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
