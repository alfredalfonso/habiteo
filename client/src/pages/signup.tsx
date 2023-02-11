import { ConnectedSignUpForm } from '@features/users';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

export function Signup() {
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.get('Example')) {
      navigate('/');
    }
  });

  return <ConnectedSignUpForm />;
}
