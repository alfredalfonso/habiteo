import { Button, Form } from 'react-bootstrap';
import { CenterComponent } from '../containers/CenterComponent';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { addUser } from '../api/user.api';
import { useState } from 'react';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const queryClient = useQueryClient();

  const addUserMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addUserMutation.mutate({
      name: name,
      email: email,
      password: password,
    });
  };

  return (
    <CenterComponent>
      <Form onSubmit={handleSubmit} className="d-grid border p-4 w-50">
        <h1 className="mb-4 text-center">Sign up</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </CenterComponent>
  );
}
