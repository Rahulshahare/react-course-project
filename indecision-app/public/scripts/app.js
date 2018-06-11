'use strict';

var app = {
    buttonName: 'Show Details'
};

var toggleButton = function toggleButton() {

    if (app.buttonName === 'Show Details') {
        app.buttonName = 'Hide Details';
    } else {
        app.buttonName = 'Show Details';
    }
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
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
        ),
        app.buttonName === 'Show Details' ? '' : React.createElement(
            'p',
            null,
            'See more details here'
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
