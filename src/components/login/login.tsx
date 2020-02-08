import QueryString from 'query-string';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth0 } from '../../react-auth0-spa';

export default function Login() {
  const auth0Context = useAuth0();
  const history = useHistory();

  useEffect(() => {
    if (auth0Context?.isAuthenticated) {
      const queryParams = QueryString.parse(history.location.search);

      if (queryParams.goback) {
        const goback: string = queryParams['goback'] as string;

        history.push(goback);
      } else {
        history.push('/home');
      }
    }
  });

  return <div>Cargando...</div>;
}
