import React from 'react';
import '../styleSheets/button.css';

function Buttton({text, isButtonClicked, manageClick}){ //Ill only pass the propiety Text and the propiety click to manage it 
    return ( //If clicked is true I return button-click, otherwise I return button-reset
        <button className= {isButtonClicked ? "button-click" : "button-reset"}
        onClick={manageClick}> 
        {text}
        </button>
    );
}

export default Buttton;