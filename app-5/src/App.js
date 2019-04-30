import React, { Component } from "react";
import Image from './Components/Image'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image thing={'https://placebear.com/1000/1000'}/>
      </div>
    );
  }
}

export default App;
