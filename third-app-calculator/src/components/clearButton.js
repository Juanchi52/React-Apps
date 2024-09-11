import React from 'react';
import '../styleSheets/clear-button.css';

const Clearbutton = (props) => (
    <div className= "clear-button" onClick={props.manageClear}>
        {props.children}
    </div>

);

export default Clearbutton;