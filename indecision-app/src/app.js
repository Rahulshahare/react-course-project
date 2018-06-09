console.log('App.js is running');

//if statement
//ternary operator
//Logical and operator

//Challenge
//only render the subtitle (and p tag) if subtitle exits -
// render new p tag - if options.length > 0 "Here are your options" "No Options"
var app = {
    title : 'Indicision App',
    subtitle: 'Put your life in hands of computer',
    options: ['one','two']
}
var template = (
            <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{ app.options.length > 0 ? "Here are your options" : "No Options"}</p>
            </div>
);

var user = {
   name:'Rahul Shahare',
   age:25,
   location:'Pandharkawada, India'
};


function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}

var templateTwo = (
        <div>
            <h1>{ user.name ? user.name : 'Anonymous'}</h1>
            {(user.age && user.age >= 18) && <p>{user.age}</p>}
            {getLocation(user.location)}
        </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot); 