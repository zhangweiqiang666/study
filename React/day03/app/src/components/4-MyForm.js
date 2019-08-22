import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'inputValue'
    }
  }
  changeHandle = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.inputValue}</div>
        <form action="">
          用户名：
          <input type="text" value={this.state.inputValue} onChange={this.changeHandle} />
        </form>
      </div>
    );
  }
}

export default MyForm;