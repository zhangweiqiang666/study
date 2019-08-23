import React, { Component } from 'react';
import style from './TestCss.css'
console.log(style)
class TestCss extends Component {
  render() {
    return (
      <div>
        <span className={style.one}>Hello</span>
        <span id={style.two}>World</span>
      </div>
    );
  }
}

export default TestCss;