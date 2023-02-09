import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

interface HBTNavbarProps {
  right?: React.ReactNode;
}

export function HBTNavbar(props: HBTNavbarProps) {
  return (
    <header className="p-3 text-bg-light shadow-sm">
      <Container>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-start">
          <Navbar.Brand
            href="/"
            className="mb-2 mb-0 me-auto mb-2 mb-md-0 text-primary text-decoration-none"
          >
            <h1>Habiteo</h1>
          </Navbar.Brand>
          <div>{props.right}</div>
        </div>
      </Container>
    </header>
  );
}
