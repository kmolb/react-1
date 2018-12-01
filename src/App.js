import React, {
  Component
} from 'react';
import './App.css';

class List extends Component{
  handleClick = (e) => {
    console.log('props', this.props.data)
  }
 // constructor(){
   // super()
   // this.handleClick = this.handleClick.bind(this);
//  }
 // handleClick(e){

 //   console.log('props', this.props.data)
//  }
 render(){
    return <div onClick={this.handleClick}>Element</div>;
  }
}

class App extends Component {
  render(){
    return <List data={123}/>;
  }
}


export default App;