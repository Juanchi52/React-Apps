import React from 'react';
import '../styleSheets/Button.css'

function Button (props){

    const isOperator = value => {
        return isNaN(value) && (value !== ".") && (value !== "=");
    };

    if (isOperator(props.children)){
        return (<div className = "button-container operator"
        onClick={() => props.manageClick(props.children)}>
           {props.children} 
        </div>
        );
    } else {
        return (<div className = "button-container"
        onClick={() => props.manageClick(props.children)}>
           {props.children} 
        </div>);
    }
    
    /*return (
    <button className = {`button-container ${isOperator(props.children) ? "operator" : ""}`}
    onClick={() => props.manageClick(props.children)}>
       {props.children} 
    </button>
    ); different way to do the same logic but we use the tag button */

}

export default Button;