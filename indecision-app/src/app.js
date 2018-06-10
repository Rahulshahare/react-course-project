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

let count = 0;
const templateTwo = (
    <div>
        <h1>Count:{count}</h1>
        <button id="my-id" className="myClass">+1</button>
        <button id="my-id">-1</button>
    </div>
); 
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo,appRoot); 