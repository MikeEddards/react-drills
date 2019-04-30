import React, { Component } from "react";
import Todo from './Components/Todo'
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: [],
      list: []
    }
    this.addTodo = this.addTodo.bind(this)
  }
  handleChange(val){
    this.setState({input: val})
  }
  addTodo(){
   
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
   
  }


  render() {

    let things = this.state.list.map((e, index) => {
      return <Todo key={index} task={e} />;
    });

    return (
      <div className="App">
        <h1>My To-do List:</h1>
        <input type="text" onChange={(e) => this.handleChange(e.target.value)}/>
        <button onClick={() => this.addTodo(this.state.input)}>Add Todo</button>

        {things}

      </div>
    );
  }
}

export default App;
