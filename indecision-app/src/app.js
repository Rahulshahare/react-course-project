class Header extends React.Component{
    render() {
        return  <p>This is from Header</p>;
       
    }
}
/*Uppercase convection*/ */
const jsx = (
    <div>
        <h1>Title</h1>
        <Header/>
        <Header/>
        <Header/>
        <Header/>
    </div>
);
ReactDOM.render(jsx, document.getElementById('app'));

