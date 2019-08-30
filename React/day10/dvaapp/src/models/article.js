

import React, { Component } from 'react';

class article extends Component {
  changMsg =()=>{
    
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    state
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch(actionCreator)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(article)