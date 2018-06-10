console.log('App.js is running');

//var let const
const app = {
    title : 'Indicision App',
    subtitle: 'Put your life in hands of computer',
    options: [],
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
        
        console.log(app.options);
        app.data = app.options.map((op)=><li key={op}> { op } </li>);
        //console.log(app.data);
        renderApp();
        
    }
};

const removeAll = () =>{
    app.options = [];
    app.data = '',
    renderApp();
};

const numbers = [10, 20, 30];

const appRoot = document.getElementById('app');
 const renderApp = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{ app.options.length > 0 ? "Here are your options" : "No Options"}</p>
        {
          // numbers.map((number)=>{
           //    return <p key={number}> Number: {number} </p>;
           //})
            
        }
        
        
        <p><button onClick={removeAll}>Remove All</button></p>
        <ol>
            <li>No of option are {app.options.length}</li>
            {app.data}
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

