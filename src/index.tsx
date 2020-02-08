import history from './utils/history';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import config from './auth_config.json';
import { Auth0Provider } from './react-auth0-spa';

const onAuthRedirectCallback = (appState?: any) => {
  const targetUrl = appState?.targetUrl
    ? appState.targetUrl
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
