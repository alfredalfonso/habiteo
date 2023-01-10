import { Container, Button, Form } from 'react-bootstrap';
import { CenterComponent } from '../containers/CenterComponent';

export default function Login() {
  return (
    <CenterComponent>
      <Form className='d-grid border p-4 w-25'>
        <h1 className='mb-4'>Sign in</h1>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </CenterComponent>
  );
}
