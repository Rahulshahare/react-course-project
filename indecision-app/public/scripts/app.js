'use strict';

var Visibility = false;

var toggleButton = function toggleButton() {
    Visibility = !Visibility;
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
            Visibility ? 'Hide Details' : 'Show Details'
        ),
        Visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey, You can check the details here!'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
