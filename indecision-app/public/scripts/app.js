'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Building visivle app with react component and state

var Visibility = function (_React$Component) {
    _inherits(Visibility, _React$Component);

    function Visibility() {
        _classCallCheck(this, Visibility);

        return _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).apply(this, arguments));
    }

    _createClass(Visibility, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility Toggle'
                ),
                React.createElement(
                    'button',
                    null,
                    'Show/Hide'
                )
            );
        }
    }]);

    return Visibility;
}(React.Component);

ReactDOM.render(React.createElement(Visibility, null), document.getElementById('app'));
// let Visibility = false;

// const toggleButton = () => {
//     Visibility = !Visibility;
//     render();
// };

// const appRoot = document.getElementById('app');
// const render = () =>{
// const template = (
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleButton}>{Visibility ? 'Hide Details' :'Show Details'}</button>
//         {Visibility && (
//             <div>
//                 <p>Hey, You can check the details here!</p>
//             </div>
//         )}

//     </div>
// );

// ReactDOM.render(template,appRoot); 
// };

// render();
