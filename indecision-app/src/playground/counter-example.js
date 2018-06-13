class Counter extends React.Component{
    render(){
        return(
            <div>
                <h1>Count: </h1>
                <button>+1</button>
                <button>-1</button>
                <button>Reset</button>                
            </div>
        );
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));
/*let count = 0;
const addOne = ()=>{
    console.log("addOne");
    count++;
    renderCounterApp();
};
const minusOne = ()=>{
    console.log("minusOne");
    count--;
    renderCounterApp();
};
const reset = ()=>{
    console.log("Reset");
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');


const renderCounterApp = () =>{
    const templateTwo = (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={minusOne}>-1</button>
        </div>
    ); 
    ReactDOM.render(templateTwo,appRoot); 

};

renderCounterApp();*/