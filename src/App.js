import React from 'react';
import './App.css';


function App() {
  const text = "This is a test message that is provided to give an idea about the final result "
  return (
    <div className="App">
      <header className="App-header">
      <p>Prototype Display</p>
        <div className="screen">
        <div id="text">{text}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
