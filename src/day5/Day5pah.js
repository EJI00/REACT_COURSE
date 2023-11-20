import React, { Component } from 'react'

export default class MountingPhase extends Component {
   state={color:"Yellow"}
//    shouldComponentUpdate(){
//         return false;
//    }
componentDidMount()
{
    setTimeout(()=>{this.setState({color:"Blue"})},3000)
}
    render() {
    return (
      <div>
        <h1>{this.state.color}</h1>
        <p id="i"></p>
      </div>
    )
  }
}