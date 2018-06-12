class IndecisionApp extends React.Component{
    render(){
        return(
            <div>
                <Header title="Test Value"/>
                <Action/>
                <Options/>
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
                <h1>Indecision</h1>
                <h2>Put Your life in the hands of Computer</h2>
            </div>
        );
       
    }
}

class Action extends React.Component{
    render(){
        return(
            <div>
                <button>What Should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render() {
        return(
            <div>
                OptionsComponent here
                <Option />
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                <p>Here are the Option</p>
            </div>
        );
    }
}


class AddOption extends React.Component{
    render() {
        return(
            <div>   
                <p>You can add New option here</p>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

