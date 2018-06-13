class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision';
        const subtitle = 'Put Your life in the hands of Computer';
        const options = ['Thing one', 'Thing Two', 'Thing three'];
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
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
                <button onClick={this.handlePick}>What Should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    handleRemoveAll() {
        alert("Remove All handlers");
    }
    render() {
        console.log(this.props.options.length);
        return(
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
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
        const text = e.target.elements.option.value;
        e.target.elements.option.value = '';
        //console.log(text);
        if(text){
            console.log(text);
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

