'use strict';

var app = {
    buttonName: 'Show Details'
};

var toggleButton = function toggleButton() {
    app.buttonName = 'Hide Detais';
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Visibility Toggle'
    ),
    React.createElement(
        'button',
        { onClick: toggleButton },
        app.buttonName
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
