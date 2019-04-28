import React, { Component, Fragment } from 'react';
import store from '../../store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header';
import { GlobalStyle } from '../../style'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>  
          <Provider store={store}>      
            <Header></Header>
            <BrowserRouter>
              <Route path="/" exact render={()=><div>home</div>}></Route>
              <Route path="/detail" exact render={()=><div>detail</div>}></Route>
            </BrowserRouter>
          </Provider>
      </Fragment>   
    );
  }
}

export default App;