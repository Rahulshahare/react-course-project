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
        console.log(this.props.options.length);
        return(
            <div>
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
    render() {
        return(
            <div>   
                <p>You can add New option here</p>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

