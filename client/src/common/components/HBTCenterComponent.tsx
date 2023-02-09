import { ReactNode } from 'react';
import { Container } from 'react-bootstrap';

export function HBTCenterComponent({ children }: { children: ReactNode }) {
  return (
    <Container className="d-flex justify-content-center mt-4">
      {children}
    </Container>
  );
}
