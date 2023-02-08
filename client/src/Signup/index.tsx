import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Login/api';
import { addUser } from './api';
import { SignUpForm } from './component';

export function SignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const addUserMutation = useMutation(addUser, {
    onSuccess: async (data) => {
      queryClient.invalidateQueries('user');
      await loginUser({ email: data.email, password: data.password });
      navigate('/');
    },
  });

  function signUpHandler(
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string
  ) {
    addUserMutation.mutate({
      name,
      email,
      password,
      passwordConfirmation,
    });
  }

  return <SignUpForm onSubmit={signUpHandler} />;
}
