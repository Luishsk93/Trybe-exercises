import React, {Component} from "react";
// Usei como referencia esse site (https://upmostly.com/tutorials/changing-the-background-color-in-react) para colocar estilo no React
let isBackgroundGreen1 = false;
let isBackgroundGreen2 = false;
let isBackgroundGreen3 = false;
class App extends Component {

  constructor() {
    super()
    this.state = {
      Cliques1: 0,
      Cliques2: 0,
      Cliques3: 0,
    }
    // this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }
  handleClick1 = () => {
    this.setState((estadoAnterior, _props) => ({
      Cliques1: estadoAnterior.Cliques1 + 1}))
    if (this.state.Cliques1 % 2 !== 0) {
      isBackgroundGreen1 = true;
    } else {
      isBackgroundGreen1 = false;
    }
  }
    
  handleClick2 = () => {
    this.setState((estadoAnterior, _props) => ({
      Cliques2: estadoAnterior.Cliques2 + 1}))
      if (this.state.Cliques2 % 2 !== 0) {
        isBackgroundGreen2 = true;
      } else {
        isBackgroundGreen2 = false;
      }
  }
  handleClick3 = () => {
    this.setState((estadoAnterior, _props) => ({
      Cliques3: estadoAnterior.Cliques3 + 1}))
      if (this.state.Cliques3 % 2 !== 0) {
        isBackgroundGreen3 = true;
      } else {
        isBackgroundGreen3 = false;
      }
  }
  render() {
    console.log(this)
    return (
      <div>
        <button style={{
          backgroundColor: isBackgroundGreen1 ? 'green' : 'white',
        }} onClick={() => this.handleClick1()}>{this.state.Cliques1}</button>
        <button style={{
          backgroundColor: isBackgroundGreen2 ? 'green' : 'white',
        }} onClick={this.handleClick2}>{this.state.Cliques2}</button>
        <button style={{
          backgroundColor: isBackgroundGreen3 ? 'green' : 'white',
        }} onClick={this.handleClick3}>{this.state.Cliques3}</button>
      </div>
    )
  }
}

export default App;
