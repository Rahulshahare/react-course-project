class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
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
Counter.defaultProps ={
    count:0
};

ReactDOM.render(<Counter/>, document.getElementById('app'));
//