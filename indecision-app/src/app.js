console.log('App.js is running');

//JSX = Javascript XML

var template = (
            <div>
            <h1>Rahul Shahare</h1>
            <p>More info</p>
            <ul>
                <li>Hi this is one</li>
                <li>Hi this is two</li>
                <li>Hi this is three</li>
                <li>Hi this is four</li>
            </ul>
            </div>
);

var userName = "Wizkumar";

var templateTwo = (
        <div>
            <h1>{userName}</h1>
            <p>Age: 26</p>
            <p>Location: Pandharkawada</p>
        </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo,appRoot); 