import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends Component {
  render() {
    const { loginStatus } = this.props;
    console.log(loginStatus)
    if (loginStatus) {
      return (
        <div>write</div>
      )
    } else {
      return <Redirect to="/login"></Redirect>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
}

export default connect(mapStateToProps, null)(Write);
