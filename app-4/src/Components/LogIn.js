import React, { Component } from 'react'

class LogIn extends Component {
    constructor(){
        super()
        this.state = {
            nameInput: '',
            passInput: ''
        }
    }
    handelChangeUser(val){
        this.setState({nameInput: val})
    }
    handelChangePass(val){
        this.setState({passInput: val})
    }
    alertLogin(name , pass){
        alert(`User Name: ${name}  Password: ${pass}`)
    }


  render() {
    return (
      <div>
        <input type="text" placeholder="User Name" onChange={(e)=> this.handelChangeUser(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => this.handelChangePass(e.target.value)}/>
        <button onClick={() => this.alertLogin(this.state.nameInput, this.state.passInput)}>Login</button>
      </div>
    )
  }
}
export default LogIn