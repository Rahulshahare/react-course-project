console.log('App.js is running');

//JSX = Javascript XML
//Now Starting Conditional Rendering in JSX
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
   name:'Rahul Shahare',
   age:26,
   location:'Pandharkawada, India'
};


function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}

var templateTwo = (
        <div>
            <h1>{user.name}</h1>
            <p>{user.age}</p>
            {getLocation(user.location)}
        </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo,appRoot); 