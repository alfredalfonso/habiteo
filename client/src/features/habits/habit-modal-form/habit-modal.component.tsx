import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { HBTCreateHabitForm } from './habit-form.component';

interface Props {
  show: boolean;
  onHide: () => void;
}

export function MyVerticallyCenteredModal(props: Props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create New Habit
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <HBTCreateHabitForm onCancel={props.onHide} />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
