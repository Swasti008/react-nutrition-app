import React, { Component } from 'react'
import App from '../App'

export default class TotalCal extends Component {
constructor(props){
        super(props)
    }
  render() {
    return (
      <div className='totalCal'>
        <p>{this.props.cal} {this.props.name} = {this.props.totalCal} calories</p>
        
        <p></p>
      </div>
    )
  }
}
