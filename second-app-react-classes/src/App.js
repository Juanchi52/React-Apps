import React from "react";
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Button from './compounents/button';
import Count from './compounents/count';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      numClicks: 0
    };
    this.manageClick = this.manageClick.bind(this);
    this.resetCont = this.resetCont.bind(this);
  }
  
  manageClick () {
    this.setState(({numClicks}) => ({numClicks: numClicks + 1}));
  }
  
  resetCont () {
    this.setState({numClicks: 0});
  }

  render() {  
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
          <Count numClicks={this.state.numClicks}/>
          <Button 
          text="click"
          isButtonClicked={true}
          manageClick={this.manageClick}/>
          <Button 
          text="reset"
          isButtonClicked={false}
          manageClick={this.resetCont}/>
        </div>
      </div>
    );
  }
}

export default App;
