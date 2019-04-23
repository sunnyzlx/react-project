import React, { Component, Fragment } from 'react';
import store from '../../store';
import { Provider } from 'react-redux';
import Header from '../Header';
import { GlobalStyle } from '../../style'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>  
          <Provider store={store}>      
            <Header></Header>
            </Provider>
      </Fragment>   
    );
  }
}

export default App;