import { HBTHabitMain } from '@features/habits';
import { Col, Container, Row } from 'react-bootstrap';

export function HBTUserHome() {
  return (
    <Container>
      <Row>
        <Col>
          <HBTHabitMain />
        </Col>
        <Col>
          <h1>Statistics</h1>
        </Col>
      </Row>
    </Container>
  );
}
