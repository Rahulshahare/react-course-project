console.log('App.js is running');

//var let const
const app = {
    title : 'Indicision App',
    subtitle: 'Put your life in hands of computer',
    options: ['one','two']
}

const onFormSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target.elements.option.value);
};
const template = (
            <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{ app.options.length > 0 ? "Here are your options" : "No Options"}</p>
            <ol>
                <li>Item</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>add option</button>
            </form>
            </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot); 

