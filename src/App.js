import React, {
  //Component
} from 'react';
import './App.css';

//funkcje function funkcja(){}
//komponenty function Komponent(){}

const people = [
  {
    name: 'Kamil',
    age: '31',
    id: 1
  },{
    name: 'Jurek',
    age: '45',
    id: 2
  },{
    name: 'Lena',
    age: '19',
    id: 3
  }
]

function Person(props){
const {name, age} = props.data;
return <div>{name} {age}</div>
}


function App() {
  return people.map((person) => {
    const { id, ...data } = person;
    return <Person data={data} key={id}/>
    
  });
 
}

  
export default App;