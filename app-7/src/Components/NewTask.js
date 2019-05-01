import React, { Component } from 'react'

export default class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    };

    this.handleAdding = this.handleAdding.bind(this);
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleAdding() {
    this.props.taskItems(this.state.input);
    this.setState({ input: '' });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder="Enter new task"
          onChange={e => this.handleInputChange(e.target.value)}
        />

        <button onClick={this.handleAdding}>Add</button>
      </div>
    );
  }
}
