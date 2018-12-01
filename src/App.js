import React, {
  Component
} from 'react';
import './App.css';

//funkcje function funkcja(){}
//komponenty function Komponent(){}

const numbers = [1,23,24,345,232,11];
function Number(props){
const {value} = props;
return <div>{value}</div>
}


function App() {
  return numbers.map((value) => {
    return <Number value={value}/>})
   //<Number value={123}/> 
}

  
export default App;