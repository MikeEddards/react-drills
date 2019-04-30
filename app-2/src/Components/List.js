import React, { Component } from 'react'

class List extends Component {
    constructor(){
        super()
        this.state = {
            list: ['item 1','item 2','item 3',],
           
        }
 
    }


        
  
  render() {
    let items = this.state.list.map((val,index)=>{
        
        return <h1 key={index}>{val}</h1>
     }) 
    return (
      <div>
        {items}

      </div>
    )
  }
}

export default List