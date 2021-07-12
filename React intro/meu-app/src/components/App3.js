import React from "react";

class App3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nome: "", idade: 26};
    }
    
    changeName = (event) => {
        this.setState({nome: event.target.value})
    }
  render() {
    return (
        <>
        Nome: <input type="text" value={this.state.nome} onChange={this.changeName}></input>
        <p>
            Olá {this.state.nome}
            </p>
        </>
    );
  }
}

export default App3;
