import React from 'react'
// import MyRefs from './components/1-MyRefs'
// import PC from './components/2-PC';
// import Style from './components/3-style';
// import MyForm from './components/4-MyForm'
import MyForm from './components/5-MyForm'
class App extends React.Component {
  constructor(props) {
    super(props);
    
  }
  // componentDidMount(){
  //   console.log(this.refs)
  //   console.log(this.refs.myrefs)
  //   console.log(this.refs.myrefs === MyRefs)
  //   console.log(this.refs.myrefs.state);
  //    this.refs.myrefs.setState({msg:'hello'},()=>{
  //      console.log(this.refs.myrefs.state)
  //    })
  // }
  render() {
    return (
      <div>
        {/* <MyRefs ref="myrefs" /> */}
        {/* <PC /> */}
        {/* <Style /> */}
        <MyForm />
      </div>
    );
  }
}
export default App;
