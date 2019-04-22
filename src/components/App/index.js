import React, { Component, Fragment } from 'react';
import Header from '../Header';
import OrderList from '../OrderList';
import { GlobalStyle } from '../../style'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
          <Header></Header>
          <OrderList></OrderList>
      </Fragment> 
    );
  }
}

export default App;