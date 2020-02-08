import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '../../react-auth0-spa';

export default function Login() {
  const auth0Context = useAuth0();
  const history = useHistory();

  useEffect(() => {
    if (auth0Context && auth0Context.isAuthenticated) {
      history.push('/home');
    }
  });

  return <div>Cargando...</div>;
}
