class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    handleAddOne(){
       // this.state.count = this.state.count + 1;
        this.setState((preState) => {
            console.log(preState);
           return {
            count : preState.count + 1
           };
        });
        console.log(this.state);
        
    }
    handleMinusOne(){
        this.setState((preState) => {
            console.log(preState.count);
           return {
            count : preState.count - 1
           };
        });
        console.log(this.state);
    }
    handleReset(){
        console.log('Reset');
        this.setState( () => {
            return{
                count: 0
            }
        });     
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>                
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