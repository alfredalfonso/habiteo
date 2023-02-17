import { Button, Card, Form, Container } from 'react-bootstrap';
import { useState } from 'react';

type Props = {
  onSubmit: (email: string, password: string) => void;
};

export function LoginForm({ onSubmit }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(email, password);
  }

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Card>
        <Form
          className="d-grid p-4"
          style={{ width: 400 }}
          onSubmit={handleSubmit}
        >
          <p className="mb-4 text-center fs-2">Login Habitora Account</p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className="mt-2" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
