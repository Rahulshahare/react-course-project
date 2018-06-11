const app = {
    buttonName:'Show Details',
};

const toggleButton = () => {
    app.buttonName = 'Hide Detais'
};

const template = (
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleButton}>{app.buttonName}</button>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot); 
