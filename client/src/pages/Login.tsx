import { LoginForm, ILoginProps } from '../components/LoginForm';

export function Login() {
  const handleSubmit = ({ email, password }: ILoginProps) => {
    console.log({ email, password });
  };

  return <LoginForm onSubmit={handleSubmit} />;
}
