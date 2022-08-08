import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [state, setState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (state) {
        setColor("red");
      } else {
        setColor("green");
      }
      setState(!state);
    }, 1000);
  }, [state]);

  return (
    <div className="App">
      <Square backgroundColor={color} />
    </div>
  );
}

export default App;

const Square = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid black;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
