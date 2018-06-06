console.log('App.js is running');

//JSX = Javascript XML

var template = (
            <div>
            <h1>This is changing.</h1>
            <p>More info</p>
            <ul>
                <li>Hi this is one</li>
                <li>Hi this is two</li>
                <li>Hi this is three</li>
                <li>Hi this is four</li>
            </ul>
            </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot); 