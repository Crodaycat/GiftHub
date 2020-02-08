import history from './utils/history';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import config from './auth_config.json';
import { Auth0Provider } from './react-auth0-spa';

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
      : `${window.location.pathname}`;

  history.push(targetUrl);
};

ReactDOM.render(
  <Auth0Provider
    onRedirectCallback={onAuthRedirectCallback}
    initOptions={{
      domain: config.domain,
      client_id: config.clientId,
      redirect_uri: `${window.location.origin}/login`
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
