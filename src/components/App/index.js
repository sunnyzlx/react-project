import React, { Component, Fragment } from 'react';
import Header from '../Header';
import { GlobalStyle } from '../../style'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
            <Header></Header>
      </Fragment> 
    );
  }
}

export default App;