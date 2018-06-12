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
const jsx = (
    <div>
        <Header/>
        <Action/>
    </div>
);
ReactDOM.render(jsx, document.getElementById('app'));

