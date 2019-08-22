import React from 'react';
import './App.css';
class MyTd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render(h) {
    return (
      <React.Fragment>
        <td>{this.props.student.number}</td>
        <td>{this.props.student.name}</td>
        <td>{this.props.student.gender}</td>
        <td>{this.props.student.age}</td>
      </React.Fragment>
    )
  }
}
function App(props) {

  return (
    <div className="App">
      <table>
        <thead>
          <tr><th>编号</th><th>姓名</th><th>性别</th><th>年龄</th></tr>
        </thead>
        <tbody>
          {
            props.student.map((item) => {
              return <tr key={item.number}><MyTd student={item} /></tr>
            })

          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
