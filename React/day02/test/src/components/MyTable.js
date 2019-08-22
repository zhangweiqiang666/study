import React from 'react';
import MyTd from './MyTd';
class MyTable extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.stus.map((item, index) => {
              return (
                <tr key={index}>
                  <MyTd stu={item} />
                </tr>
              )
            })

          }
        </tbody>
      </table>
    )
  }
}
// 导出组件
export default MyTable