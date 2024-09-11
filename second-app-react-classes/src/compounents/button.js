import React from 'react';
import '../styleSheets/button.css';

class Button extends React.Component {//Ill only pass the propiety Text and the propiety click to manage it
    render() {
        return ( //If clicked is true I return button-click, otherwise I return button-reset
        <button className= {this.props.isButtonClicked ? "button-click" : "button-reset"}
        onClick={this.props.manageClick}> 
        {this.props.text}
        </button>
    );    
    }
}

export default Button;