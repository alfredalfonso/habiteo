import { useMutation } from 'react-query';
import { createUser } from '../api/create-user.api';
import { SignUpForm } from './signup-form.component';

export function ConnectedSignUpForm() {
  const addUserMutation = useMutation(createUser);

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
