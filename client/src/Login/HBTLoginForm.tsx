import { Button, Card, Form } from 'react-bootstrap';
import { HBTCenterComponent } from '../common/components/HBTCenterComponent';
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

export interface ILoginProps {
  email: string;
  password: string;
}

export interface ILoginFormProps {
  onSubmit: ({ email, password }: ILoginProps) => void;
}

export function HBTLoginForm(props: ILoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const cookies = new Cookies();
  const navigate = useNavigate();

  const { onSubmit } = props;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({ email, password });
  }

  return (
    <HBTCenterComponent>
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
    </HBTCenterComponent>
  );
}
