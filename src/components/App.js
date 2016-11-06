import React, { Component } from 'react';
import NavBar from './NavBar';
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div style={{marginTop: "60px"}}>
           {this.props.children}
        </div>
      </div>
    )
  }
}
