import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';


class App extends Component {

state = {
  toggle: true
}

toggle = () =>{
  this.setState({
   toggle: !this.state.toggle
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <Welcome text="React this shit" toggle={this.state.toggle}/>
        </header> 
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      {this.state.toggle &&
        <p>This is a content </p> 
      }
    <Wrapper onClick={this.toggle}> <button>Button</button></Wrapper>
      </div>
    );
  }
}

class Welcome extends Component {
    render() {
      const { text, toggle } = this.props;
      console.log(toggle);
      return (
        <h1 className="sample">{ text }</h1>
      );
    }
}


export default App;

const Wrapper = styled.div`
 > button {
 font-size: 1.5rem;
 color: #2d2a2as;
 background: transparent;
 border: solid #009688;
 cursor: pointer;
 padding: 0.999rem;
 min-width: 240px;
 border-radius: 10rem;
 }
 
 `;