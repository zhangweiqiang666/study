// 事件传参
import React from 'react';
class MyEvent extends React.Component {
  handle(a, b, c, event) {
    // console.log(event.target.getAttribute('data-id'))
    console.log(a, b, c, event)
  }
  render() {
    return (
      <div>
        {/* <button onClick={this.handle.bind(this,1, 2, 3)} data-id="1001">点击</button> */}
        <button onClick={(e)=>{this.handle(a,b,e)}} data-id="1001">点击</button>
      </div >
    )
  }
}
export default MyEvent