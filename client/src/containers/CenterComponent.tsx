import { ReactNode } from 'react';
import { Container } from 'react-bootstrap';

export function CenterComponent({ children }: { children: ReactNode }) {
  return (
    <Container className='d-flex justify-content-center align-items-center vh-100'>
      {children}
    </Container>
  );
}
