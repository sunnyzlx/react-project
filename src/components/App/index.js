import React, { PureComponent, Fragment } from 'react';
import store from '../../store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import Detail from '../Detail/loadable';
import Login from '../Login';
import Write from '../Write';
import { GlobalStyle } from '../../style';

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>  
          <Provider store={store}>                 
            <BrowserRouter>
              <Header></Header>
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/write" exact component={Write}></Route>
            </BrowserRouter>
          </Provider>
      </Fragment>   
    );
  }
}

export default App;