import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.setState({comment: 'hello'});
  }

  componentWillMount(){
    console.log('hello')
  }

  componentDidMount(){
    console.log('hi');
  }


    toggle: true
  state = {
  }

  toggle = () => {
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
     <button style={{ fontSize: '50px', color: '#f2f2f2', backgroundColor: '#000' }} onClick={this.toggle}> Button </button>
      </div>
    );
  }
}

class Welcome extends Component {
    render() {
      const { text, toggle } = this.props;
      console.log(toggle);
      return (
        <h1 className="shit">{ text }</h1>
      );
    }
}


export default App;

const Wrapper = styled.div`
  > button {
    position: absolute;
    
  }


`
