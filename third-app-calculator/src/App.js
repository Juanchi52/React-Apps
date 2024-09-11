import './App.css';
import Button from './components/Button.js';
import Screen from './components/input-screen.js';
import Clearbutton from './components/clearButton.js';
import { useState } from 'react';
import {evaluate} from 'mathjs';
import Picture from './components/picture.js';

function App() {

  const [input,setInput] = useState('');

  const addInput = val => {
    if(!isNaN(val) || val === ".") {  /* In this part I verified if Val is a number or a decimal point*/
      setInput(input + val);

    } else { /*In this part of the else means the input is an operator like (+,-,*,/) */
      const lastChar = input[input.length -1]; /*I obtain the last character of the string*/

      if (!isNaN(lastChar) || lastChar === ".") {  /*I verified if the las character is a number or a decimal point */ 
        setInput(input + val);
        
      } else if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
        setInput(input.slice(0,-1) + val); /*I replace the las character with the new operator and do the calculations*/
      }
    }
  };

  const result = () => {  /*I verified If the user put values or try to do an empty calculation*/
    if(input) {
      setInput(evaluate(input));
    } else {
      alert("Please you need to put some values to do the caculations");
    }
  };

  return (
    <div className="App">
      <Picture />
      <div className= "calculator-container">
        <Screen input={input}/>
        <div className= "fila">
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className= "fila">
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className= "fila">
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className= "fila">
          <Button manageClick={result}>=</Button>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>/</Button>
        </div>
        <div className= "fila">
          <Clearbutton manageClear={() => setInput('')}>
            Clear
          </Clearbutton>
        </div>
      </div>
    </div>
  );
}

export default App;
