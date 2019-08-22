import React, { Component } from 'react';
import './3-style.css'
class style extends Component {
  render() {
    let btnStyle = {
      background: 'teal',
      width:100,
      border: 'none',
      fontSize: 30,
      color: 'white',
      borderRadius: 10
    }
    return (
      <div className="Style">
        <span style={{color:'red',fontSize:40}}>hello </span>
        <button style ={btnStyle}>按钮</button>
        <h3>world</h3>
      </div>
    );
  }
}

export default style;