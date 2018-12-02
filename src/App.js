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
    const {counter} = this.state
    return <div>
      <div><h2>Count: {counter}</h2></div>
      <div onClick={this.handleClickPlus}><button>Plus</button></div>
      <div onClick={this.handleClickMinus}><button>Minus</button></div>
      {/* {!!(counter % 2) &&<div>Nieparzyste</div> }  */}
      {!!(counter % 2)? <div>nieparzyste</div> : <div>parzyste</div> } 
    </div>;
  }
}

class App extends Component {
  render(){
    return <Counter initValue={123}/>;
  }
}

export default App;