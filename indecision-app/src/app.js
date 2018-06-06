console.log('App.js is running');

//JSX = Javascript XML

var template = (
            <div>
            <h1>This is changing.</h1>
            <p>More info</p>
            </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot); 