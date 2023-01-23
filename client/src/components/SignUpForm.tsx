import { Button, Form } from 'react-bootstrap';
import { CenterComponent } from '../containers/CenterComponent';
import React, { useState } from 'react';

interface IFormProps {
  onSubmit: (name: string, email: string, password: string) => void;
}

export function SignUpForm(props: IFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { onSubmit } = props;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(name, email, password);
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <CenterComponent>
      <Form className="d-grid border p-4 w-50" onSubmit={handleSubmit}>
        <h1 className="mb-4 text-center">Sign up</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
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
    </CenterComponent>
  );
}