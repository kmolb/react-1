import React, {
  Component
} from 'react';
import './App.css';


const list = [{
    name: "Wojtek",
    surname: "Nowak",
    age: 23,
    id: 1
  },

  {
    name: "Daniel",
    surname: "Nowak",
    age: 23,
    id: 2
  },

  {
    name: "kamil",
    surname: "Nowak",
    age: 23,
    id: 3
  }
];

class Item extends Comment{
  render(){
    const {name, age} = this.props
    return <div>{name}{age}</div>
  }
}
class List extends Component{
  render(){
    const myList = this.props.data.map((elem)=>{
      const {id, ...rest} = elem;
       return <Item key={id} {...rest}/>
     });
     return myList;
  }
}