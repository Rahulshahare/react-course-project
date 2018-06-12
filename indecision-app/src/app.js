class Header extends React.Component{
    render() {
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
                <p>List of Options are here</p>
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

const jsx = (
    <div>
        <Header/>
        <Action/>
        <Options/>
        <AddOption/>
    </div>
);
ReactDOM.render(jsx, document.getElementById('app'));

