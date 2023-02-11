import { useMutation, useQueryClient } from 'react-query';
import { createSession } from './create-session.api';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from './login-form.component';
import Cookies from 'universal-cookie';

export function ConnectedLoginForm() {
  const queryClient = useQueryClient();
  const cookies = new Cookies();
  const navigate = useNavigate();

  const addSessionMutation = useMutation(createSession, {
    onSuccess: (data) => {
      cookies.set('access-token', data.accessToken);
      cookies.set('refresh-token', data.refreshToken);
      navigate('/');
    },
  });

  const handleSubmit = (email: string, password: string) => {
    addSessionMutation.mutate({
      email,
      password,
    });
  };

  return <LoginForm onSubmit={handleSubmit} />;
}
