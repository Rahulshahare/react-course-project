console.log('App.js is running');

//var let const
const app = {
    title : 'Indicision App',
    subtitle: 'Put your life in hands of computer',
    options: ['one','two'],
    data:'',
}

const onFormSubmit = (e) =>{
    e.preventDefault();
    //console.log(e.target.elements.option.value);
    const option = e.target.elements.option.value;

    if(option){
        //console.log(option);
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
        console.log(app.options);
        
    }
};

const removeAll = () =>{
    app.options = [];
    renderApp();
};
//challengeTime
//create "Remove All" button above list
//on click -> wipe the array -> rerender

const appRoot = document.getElementById('app');
 const renderApp = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{ app.options.length > 0 ? "Here are your options" : "No Options"}</p>
        <p><button onClick={removeAll}>Remove All</button></p>
        <ol>
            <li>No of option are {app.options.length}</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>add option</button>
        </form>
        </div>
    );

    ReactDOM.render(template,appRoot); 

 };

renderApp();

