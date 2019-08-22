import React from 'react';
class MyTd extends React.Component {
  render() {
    // 获取MyTable在调用MyTd的时候传递的参数
    const { stu } = this.props;
    return (
      <React.Fragment>
        <td>{stu.name}</td>
        <td>{stu.age}</td>
        <td>{stu.gender}</td>
      </React.Fragment>
    )
  }
}
export default MyTd;