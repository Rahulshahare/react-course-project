//Building visivle app with react component and state

class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visible : false
        };

    }
    handleToggle(){
        console.log('handleToggle');
        this.setState((prevState) => {
            return{
                visible: !prevState.visible
            };
        });
    }
    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.visible?'Hide Details' :'Show Details'}</button>
                {this.state.visible && (
                    <div>
                        <p>Hey, You can see details here</p>
                    </div>
                )}
            </div>
        );
    }
} 

ReactDOM.render(<Visibility/>, document.getElementById('app'));
// let Visibility = false;

// const toggleButton = () => {
//     Visibility = !Visibility;
//     render();
// };

// const appRoot = document.getElementById('app');
// const render = () =>{
// const template = (
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleButton}>{Visibility ? 'Hide Details' :'Show Details'}</button>
//         {Visibility && (
//             <div>
//                 <p>Hey, You can check the details here!</p>
//             </div>
//         )}
        
//     </div>
// );

// ReactDOM.render(template,appRoot); 
// };

// render();