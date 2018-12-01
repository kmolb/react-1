import React, {
  Component
} from 'react';
import './App.css';

class List extends Component {

  constructor(props) {
    super();
    this.state = {
      date: Date.now(),
    }
  }


  handleClick = (e) => {
    console.log('props', this.props.data)
  
this.setState({
  date: Date.now(),
})}

  render() {
    return <div onClick = {
      this.handleClick
    } > Element < /div>;
  }
}

class App extends Component {
  render() {
    return <List data = {
      123
    }
    />;
  }
}


export default App;