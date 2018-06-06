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
var user = {
    name: 'Rahul',
    age : 26,
    Location: 'Pandharkawada'
};
var userName = "Wizkumar";
var userAge = 26;
var userLocation = 'Pandharkawada';

var templateTwo = (
        <div>
            <h1>{user.name}</h1>
            <p>Age: {user.age}</p>
            <p>Location: {user.Location}</p>
        </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo,appRoot); 