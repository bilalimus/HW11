import { useState } from 'react';
import styled from 'styled-components'
import './App.css';

function App() {
  const [color, setColor] = useState('green')

  
  
  return (
    <div className="App">
      <Square bg={color}/>
    </div>
  );
}

export default App;

const Square = styled.div`
width: 400px;
height: 400px;
border: 2px solid black;
background-color: ${props => props.color};
`
