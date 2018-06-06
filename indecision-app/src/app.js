console.log('App.js is running');

//JSX = Javascript XML

var template = <h1>This is changing.</h1><p>More info</p>;
var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot); 