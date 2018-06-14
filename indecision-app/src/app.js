//stateless functional component
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : []
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return{
                options:[]
            };
        });
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

        this.setState((prevState) =>{
            return{
                options: prevState.options.concat([option])
            };
        });
    }

    render(){
        const title = 'Indecision';
        const subtitle = 'Put Your life in the hands of Computer';
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}
                        handlePick = {this.handlePick}/>
                <Options 
                    options={this.state.options}
                    hasOptions={this.state.options.length > 0}
                    handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption handleAddOption={this.handleAddOption} />
               
            </div>
        );
    }
}
const Header = (props) => {
    return(
        <div className="header">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};
// class Header extends React.Component{
//     render() {
//         console.log(this.props);
//         return(
//             <div className="header">
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
       
//     }
// }
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

// class Action extends React.Component{
    
//     render(){
//         return(
//             <div className="action">
//                 <button
//                  onClick={this.props.handlePick}
//                  disabled={!this.props.hasOptions}
//                  >
//                  What Should i do?
//                  </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return(
        <div className="options">
            <button 
                onClick={props.handleDeleteOptions}
                disabled={!props.hasOptions}
            >
                Remove All
            </button>
            {props.options.map((option)=> <Option key={option} optionText={option}/> )}
        </div>
    );
};

// class Options extends React.Component{
    
//     render() {
//         //console.log(this.props.options.length);
//         return(
//             <div className="options">
//                 <button 
//                     onClick={this.props.handleDeleteOptions}
//                     disabled={!this.props.hasOptions}
//                 >
//                     Remove All
//                 </button>
//                 {this.props.options.map((option)=> <Option key={option} optionText={option}/> )}
//             </div>
//         );
//     }
// }
const Option = (props) => {
    return(
        <div className="option">
            {props.optionText}
        </div>
    );
};
// class Option extends React.Component{
//     render(){
//         return(
//             <div className="option">
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }


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

        this.setState(() =>{
            return{
                error : error
            };
        });
        
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

// const User = (props) => {
//    // console.log(props);
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>            
//         </div>
//     );
// };


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

