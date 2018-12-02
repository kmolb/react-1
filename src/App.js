import React, { Component } from 'react';
import classNames from 'classnames';
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

    return <div className={classNames(classNames({
        App1: true,
        red: counter % 3 === 0,
        green: counter % 3 === 1,
        blue: counter % 3 === 2,
        
    
    }))>
      <div>Count: {counter}</div>
      <div onClick={this.handleClickPlus}><button>Plus</button></div>
      <div onClick={this.handleClickMinus}><button>Minus</button></div>

      {!!(counter % 2) && <div>Additional Element</div>}
      {!!(counter % 2) ? <div>nieparzysta</div> : <div>parzysta</div>}
    </div>;
  }
}

class App extends Component {
  render(){
    return <Counter initValue={232}/>;
  }
}


export default App;