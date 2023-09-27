import React, { Component } from 'react'

export default class Contact extends Component {


  render() {
    return (
        <div>
            <li>{this.props.name}: {this.props.number}</li>
            <button onClick={() => this.props.onContactDelete(this.props.name)}>Delete</button>
        </div>
    )
  }
}
