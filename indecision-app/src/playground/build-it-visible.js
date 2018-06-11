
let Visibility = false;

const toggleButton = () => {
    Visibility = !Visibility;
    render();
};

const appRoot = document.getElementById('app');

const render = () =>{
const template = (
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleButton}>{Visibility ? 'Hide Details' :'Show Details'}</button>
        {Visibility && (
            <div>
                <p>Hey, You can check the details here!</p>
            </div>
        )}
        
    </div>
);

ReactDOM.render(template,appRoot); 
};

render();