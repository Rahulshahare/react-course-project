console.log('App.js is running');

//var let const
const app = {
    title : 'Indicision App',
    subtitle: 'Put your life in hands of computer',
    options: ['one','two']
}
const template = (
            <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{ app.options.length > 0 ? "Here are your options" : "No Options"}</p>
            </div>
);

const user = {
   name:'Rahul Shahare',
   age:25,
   location:'Pandharkawada, India'
};


function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
        <div>
            <h1>{ user.name ? user.name : 'Anonymous'}</h1>
            {(user.age && user.age >= 18) && <p>{user.age}</p>}
            {getLocation(user.location)}
        </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot); 