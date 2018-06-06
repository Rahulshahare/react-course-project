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
//Challenge time
//create app object title/subtitle
//use title/subtitle in the template
//render template
var app = {
    title : 'Oceangreen Technology',
    subtitle : 'We Work For Excellence'
};

var app2 = {
    title : 'Oceangreen Technology',
    subtitle : 'We Work For Excellence'
};


var templateTwo = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>

            <h1>{app2.title}</h1>
            <p>{app2.subtitle}</p>
           
        </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo,appRoot); 