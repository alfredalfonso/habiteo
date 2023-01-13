import { LoginForm } from '../components/LoginForm';

export function Login() {
  const handleSubmit = (email: string, password: string) => {
    console.log({ email, password });
  };

  return <LoginForm onSubmit={handleSubmit} />;
}
