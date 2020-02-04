import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
