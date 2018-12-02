import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  constructor(props){
    super(props);

    this.state = {
      counter: this.props.initValue || 0,
    }
  }

  handleClickPlus = () => {
    this.setState((state) => ({
      counter: state.counter + 1
    }));
  }

  handleClickMinus = () => {
    this.setState((state) => ({
      counter: state.counter - 1
    }));
  }
  
  render(){
    return <div>
      <div>Count: {this.state.counter}</div>
      <div onClick={this.handleClickPlus}>Plus</div>
      <div onClick={this.handleClickMinus}>Minus</div>
    </div>;
  }
}

class App extends Component {
  render(){
    return <Counter initValue={123}/>;
  }
}

export default App;