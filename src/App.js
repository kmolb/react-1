import React, {
  Component
} from 'react';
import './App.css';

//funkcje function funkcja(){}
//komponenty function Komponent(){}
const obj = {
  age:232,
}
function Button(props){
  return <div>{props.label.age}</div>
}

function App() {
  return <Button label={obj}/>  //{123} przekazanie liczby // {false} przekazanie bulin
   
  }

  
export default App;