import React, { Component, Fragment } from 'react';
import store from '../../store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import Detail from '../Detail';
import { GlobalStyle } from '../../style';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>  
          <Provider store={store}>      
            <Header></Header>
            <BrowserRouter>
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail" exact component={Detail}></Route>
            </BrowserRouter>
          </Provider>
      </Fragment>   
    );
  }
}

export default App;