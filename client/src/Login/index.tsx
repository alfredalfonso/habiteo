import { LoginForm, ILoginProps } from './component';
import { useMutation, useQueryClient } from 'react-query';
import { loginUser } from './api';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const queryClient = useQueryClient();
  const cookies = new Cookies();
  const navigate = useNavigate();

  const addSessionMutation = useMutation(loginUser, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('user');
      cookies.set('Example', data.accessToken);
      navigate('/');
    },
  });

  const handleSubmit = ({ email, password }: ILoginProps) => {
    addSessionMutation.mutate({
      email,
      password,
    });
  };

  return <LoginForm onSubmit={handleSubmit} />;
}
