import Modal from 'react-bootstrap/Modal';
import { useMutation, useQueryClient } from 'react-query';
import { Habit } from '../habit.type';
import { createHabit } from './create-habit.api';
import { HBTHabitForm } from './habit-form.component';

interface Props {
  show: boolean;
  onHide: () => void;
  modalTitle: string;
  data?: Habit;
}

export function FormModal(props: Props) {
  const queryClient = useQueryClient();

  const addSessionMutation = useMutation(createHabit, {
    onSuccess: () => {
      queryClient.invalidateQueries(['habits']);
    },
  });

  function handleSubmit(input: Omit<Habit, 'id' | 'createdAt' | 'updatedAt'>) {
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
          {props.modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <HBTHabitForm
          handleCloseModal={props.onHide}
          onSubmit={handleSubmit}
          habit={props.data}
        />
      </Modal.Body>
    </Modal>
  );
}
