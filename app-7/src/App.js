import React, { Component } from "react";

import List from './Components/List'
import NewTask from './Components/NewTask'
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: []
    }
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleAdd(tasks){
    this.setState({list: [...this.state.list, tasks]})
    
  }

  render() {
    console.log(this.state.list)
    return (
      <div className="App">
      <h1>Things to do</h1>
      <NewTask taskItems={this.handleAdd} />
      <List tasks={this.state.list}/>
      </div>
    );
  }
}

export default App;
