import Modal from 'react-bootstrap/Modal';
import { useMutation, useQueryClient } from 'react-query';
import { CreateHabitInput, Habit, UpdateHabitInput } from '../types/habit.type';
import { HBTHabitForm } from './habit-form.component';

interface Props {
  show: boolean;
  onHide: () => void;
  modalTitle: string;
  data?: Habit;
  api:
    | ((input: UpdateHabitInput) => Promise<any>)
    | ((input: CreateHabitInput) => Promise<any>);
}

export function FormModal(props: Props) {
  const queryClient = useQueryClient();

  const sessionMutation = useMutation(props.api, {
    onSuccess: () => {
      queryClient.invalidateQueries(['habits']);
    },
  });

  function handleSubmit(input: any) {
    sessionMutation.mutate({
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
