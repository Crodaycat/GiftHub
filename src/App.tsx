import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Login from './components/login/login';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Redirect from='/' to='/home' />
        </Switch>
      </HashRouter>
    </Provider>
  );
}
