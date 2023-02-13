import Modal from 'react-bootstrap/Modal';
import { useMutation, useQueryClient } from 'react-query';
import { createHabit } from './create-habit.api';
import { HBTHabitForm } from './habit-form.component';
import { createHabitInput } from './habit-types';

interface Props {
  show: boolean;
  onHide: () => void;
}

export function MyVerticallyCenteredModal(props: Props) {
  const queryClient = useQueryClient();

  const addSessionMutation = useMutation(createHabit, {
    onSuccess: () => {
      queryClient.invalidateQueries(['habits']);
    },
  });

  function handleSubmit(input: createHabitInput) {
    addSessionMutation.mutate({
      ...input,
    });
  }

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
        <HBTHabitForm handleCloseModal={props.onHide} onSubmit={handleSubmit} />
      </Modal.Body>
    </Modal>
  );
}
