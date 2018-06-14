//Using Local Storage
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : props.options
        };
    }
    componentDidMount() {
        console.log('fetching data');
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('Saving Data');
        }
        
    }
    componentwillUnmount(){
        console.log('componentWillunmount');
        //it fires when component is getting out of screen
    }
    handleDeleteOptions() {
         this.setState( () =>({ options: [] }));
    }
    handleDeleteOption(optionToRemove){
            this.setState( (prevState) => ({
                options: prevState.options.filter((option)=> optionToRemove !== option)
            }));
    }
    handlePick(){
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option){
        if(!option){
            return 'Enter Valid Value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exits';
        }

        this.setState( (prevState) => ({options : prevState.options.concat([option])}))
    
    }

    render(){
        const title = 'Indecision';
        const subtitle = 'Put Your life in the hands of Computer';
        return(
            <div>
                <Header  subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}
                        handlePick = {this.handlePick}/>
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                    />
                <AddOption handleAddOption={this.handleAddOption} />
               
            </div>
        );
    }
}
IndecisionApp.defaultProps = {
    options:[]
};
const Header = (props) => {
    return(
        <div className="header">
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};
Header.defaultProps = {
    title :'some default title',

};

const Action = (props) => {
    return(
        <div className="action">
            <button
             onClick={props.handlePick}
             disabled={!props.hasOptions}
             >
             What Should i do?
             </button>
        </div>
    );
};


const Options = (props) => {
    return(
        <div className="options">
            <button 
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
            {props.options.map((option)=> 
                <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOption = {props.handleDeleteOption}    
                    /> 
            )}  
        </div>
    );
};


const Option = (props) => {
    return(
        <div className="option">
            {props.optionText}
            <button 
            onClick={ (e) => {
                props.handleDeleteOption(props.optionText);
            }}
            >
            remove
            </button>
        </div>
    );
};

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error:undefined
        };
    }
    onFormSubmit (e){
        e.preventDefault();

        const text = e.target.elements.option.value.trim();
        e.target.elements.option.value = '';
        const error = this.props.handleAddOption(text);

        
        this.setState ( () => ({error: error}));
    }
    render() {
        return(
            <div className="addoption">  
            {this.state.error && <p>{this.state.error}</p>}  
                <form onSubmit={this.onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add New Option</button>
                
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

