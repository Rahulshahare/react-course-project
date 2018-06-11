const app = {
    buttonName:'Show Details',
};

const toggleButton = () => {
    
    if(app.buttonName==='Show Details'){
        app.buttonName = 'Hide Details';
    }else{
        app.buttonName = 'Show Details';
    }
    render();
};

const appRoot = document.getElementById('app');

const render = () =>{
const template = (
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleButton}>{app.buttonName}</button>
    </div>
);

ReactDOM.render(template,appRoot); 
};

render();