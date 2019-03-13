import React, { Component, Fragment } from 'react';
import Header from '../Header';
import OrderList from '../OrderList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>App</div>
        <Header></Header>
        <OrderList></OrderList>
      </Fragment> 
    );
  }
}

export default App;