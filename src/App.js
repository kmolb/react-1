import React, {
  Component
} from 'react';
import './App.css';

class App extends Component{
  handleClick(e){
    console.log(e)
  }
  render(){
    return <div onClick={this.handleClick}>Element</div>;
  }
}


export default App;