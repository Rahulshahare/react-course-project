class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.state = {
            options : ['hello','ello']
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return{
                options:[]
            };
        });
    }
    //handleDeleteOption

    render(){
        const title = 'Indecision';
        const subtitle = 'Put Your life in the hands of Computer';
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}/>
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component{
    render() {
        console.log(this.props);
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
       
    }
}

class Action extends React.Component{
    handlePick(){
        alert("Handle Pick")
    }
    render(){
        return(
            <div>
                <button
                 onClick={this.handlePick}
                 disabled={!this.props.hasOptions}
                 >
                 What Should i do?
                 </button>
            </div>
        );
    }
}

class Options extends React.Component{
    
    render() {
        //console.log(this.props.options.length);
        return(
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {this.props.options.map((option)=> <Option key={option} optionText={option}/> )}
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.optionText}
            </div>
        );
    }
}


class AddOption extends React.Component{
    onFormSubmit (e){
        e.preventDefault();

        const text = e.target.elements.option.value.trim();
        e.target.elements.option.value = '';

        if(text){
            alert(text);
        }
    }
    render() {
        return(
            <div>   
                <form onSubmit={this.onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add New Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

