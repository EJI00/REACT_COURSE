import React, { Component } from 'react'
import DAY6CE from './DAY6CE'
class HoverCouunter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.inc}>Click Me {this.props.count}</button>
      </div>
    )
  }
}
export default DAY6CE(HoverCouunter)