import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Buttton from './compounents/button';
import Count from './compounents/count';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manageClick = () => {
    setNumClicks(numClicks + 1);
  };

  const resetCont = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className = "freecodecamp-logo-contenedor">
        <img 
        className ="freecodecamp-logo"
        src= {freeCodeCampLogo}
        alt= "Logo-freecodecamp"
        />
      </div>
      <div className= 'principal-container'>
        <Count numClicks={numClicks}/>
        <Buttton 
        text="click"
        isButtonClicked={true}
        manageClick={manageClick}/>
        <Buttton 
        text="reset"
        isButtonClicked={false}
        manageClick={resetCont}/>
      </div>
    </div>
  );
}

export default App;
