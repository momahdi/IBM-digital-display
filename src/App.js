import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
var IoTDevice = require ('./device/device.js');

/* Edit these lines to reflect your IoT platform config. */
const ORG_ID = "cl3hm5";
const ACCESS_TOKEN = "secure_token_ibm";
var device = new IoTDevice(ORG_ID, ACCESS_TOKEN);
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      text: ""
    }
  }

componentWillMount(){
setInterval(() => {
  /* This pushes / publishes data to Watson IoT*/
  device.Push('getCurrentMessage');
  var test = device.getMessage()
  this.setState({
    text: test
  })
  //localStorage.setItem("mytime", device.getMessage());
}, 300000);

}
  
render(){
  
  return (
    <div className="App">
      <header className="App-header">
      <p>Prototype Display</p>
        <div className="screen">
        
        <div id="text">{this.state.text}</div>
        </div>
      </header>
    </div>
  );
}
}
export default App;
