import React, { Component } from 'react'

class FilterList extends Component {
    constructor(){
        super()
            this.state = {
                things: [ 'jewel','tactic','dedicate','aunt','high','tray','particle'],
                
                filteredThings: '' 
            }

    }
        handleChange(val){
            this.setState({ filteredThings: val})

        }



  render() {
      let stuff = this.state.things.filter((e) => {
          return e.includes(this.state.filteredThings)
      })
      .map((e, index) => {
          return <h1 key={index}>{e}</h1>
      })
    return (
      <div>
        <input type="text" onChange={ (e) => this.handleChange(e.target.value)}/>

        {stuff}

      </div>
    )
  }
}
export default FilterList