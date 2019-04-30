import React, { Component } from 'react'

 class Text extends Component {
    constructor(){
        super()
        this.state = {
            input: ''
            
        }
    }
handleChange(val){
    this.setState({input: val})
}

  render() {
    return (
      <div>
        <input style={{marginTop: '30px'}} type="text" onChange={(e) => this.handleChange(e.target.value)}/>
        <h1>{this.state.input}</h1>
      </div>
    )
  }
}
export default Text