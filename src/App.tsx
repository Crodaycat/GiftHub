import { createBrowserHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import config from './auth_config.json';
import Home from './components/home/Home';
import { Auth0Provider } from './react-auth0-spa';
import store from './redux/store';

const history = createBrowserHistory();

const onAuthRedirectCallback = (redirectResult?: RedirectLoginResult) => {
  console.log(
    'auth0 onRedirectCallback called with redirectState %o',
    redirectResult
  );

  // Clears auth0 query string parameters from url
  const targetUrl =
    redirectResult &&
    redirectResult.appState &&
    redirectResult.appState.targetUrl
      ? redirectResult.appState.targetUrl
      : window.location.pathname;

  history.push(targetUrl);
};

export default function App() {
  return (
    <Provider store={store}>
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onAuthRedirectCallback}
      >
        <Router history={history}>
          <Switch>
            <Route path='/home'>
              <Home />
            </Route>
            <Redirect from='/' to='/home' />
          </Switch>
        </Router>
      </Auth0Provider>
    </Provider>
  );
}
