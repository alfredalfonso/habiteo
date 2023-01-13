import { useMutation, useQueryClient } from 'react-query';
import { addUser } from '../api/user.api';
import { SignUpForm } from '../components/SignUpForm';

export function SignUp() {
  const queryClient = useQueryClient();

  const addUserMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });

  const handleSubmit = (name: string, email: string, password: string) => {
    addUserMutation.mutate({
      name,
      email,
      password,
    });
  };

  return <SignUpForm onSubmit={handleSubmit} />;
}
