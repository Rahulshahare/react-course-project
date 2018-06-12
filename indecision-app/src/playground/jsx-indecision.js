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
const removeOption = (i) =>{
    console.log('hi '+app.options[i]);
};

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert(option);
    //console.log(randomNum);
};

const numbers = [10, 20, 30];

const appRoot = document.getElementById('app');
 const renderApp = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{ app.options.length > 0 ? "Here are your options" : "No Options"}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
        {/*app.options.length>0 ? <button onClick={onMakeDecision}>What should i do?</button> :''*/}
        {app.options.length>0 ? <p><button onClick={removeAll}>Remove All</button></p> :''}
        
        {/*app.options.length*/}
        <ol>
            {app.options.map((op,i)=><li key={i}> { op } </li>)}
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

