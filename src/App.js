import React, {
  //Component;
} from 'react';
import './App.css';

//funkcje function funkcja(){}
//komponenty function Komponent(){}

const title = [
  {
    lable: 'INFOSHARE 2019',
    id: 1,
    expandable: true
  },{
    lable: 'CALL FOR SPEAKERS',
    id: 2,
    expandable: false
  },{
    lable: 'AI ROADSHOW',
    id: 3,
    expandable: false
  },{
    lable: 'STARTUP CONTEST',
    id: 4,
    expandable: false
  },{
    lable: 'IS PROJECTS',
    id: 5,
    expandable: true
  },{
    lable: 'BLOG',
    id: 6,
    expandable: false
  },{
    lable: 'PREVIUS EDITIONS',
    id: 7,
    expandable: true
  },{
    lable: 'ABOUT IS',
    id: 8,
    expandable: true
  }
]

function Title(props){
const {lable, expandable} = props.data;
return <p> {expandable ? ' |#| ' : ''}{lable}</p>
}


function App() {
  return title.map((title) => {
    const { id, ...data } = title;
    return <Title data={data} key={id}/>
    
  });
 
}

  
export default App;