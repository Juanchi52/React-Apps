import React from 'react';
import '../styleSheets/Picture.css';
import logoCalculator from '../images/logo-calculator.png';


function Picture () {
    return (
        <div className= "logo-container">
            <img 
            src= {logoCalculator}
            className= "logo"
            alt= "Logo" />
        </div>

    );
}

export default Picture;