import { useState } from 'react';
import { Button, Dropdown, Stack } from 'react-bootstrap';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { BsCheckLg } from 'react-icons/bs';
import { FormModal } from './habit-modal.component';
import { Habit } from '../types/habit.type';
import { updateHabit } from '../api/update-habit.api';
import { deleteHabit } from '../api/delete-habit.api';
import { useMutation, useQueryClient } from 'react-query';
import { HBTButtonLog } from '@features/habit-log/components/habit-log-button.component';

type Props = {
  habit: Habit;
  isDone: boolean;
};

export function HBTHabitItem({ habit, isDone }: Props) {
  const [modalEditHabit, setModalEditHabit] = useState(false);

  const queryClient = useQueryClient();

  const sessionMutation = useMutation(deleteHabit, {
    onSuccess: () => {
      queryClient.invalidateQueries(['habits', 'habit-logs']);
    },
  });

  function handleDelete(inputId: number | undefined) {
    sessionMutation.mutate(inputId);
  }

  // console.log('isDone: ' + isDone);

  return (
    <ListGroupItem className="py-3 lh-sm">
      <div className="d-flex w-100 align-items-center justify-content-between">
        <strong className="mb-1">{habit.name}</strong>
        <Stack direction="horizontal" gap={2}>
          {!isDone ? (
            <HBTButtonLog input={{ habitId: habit.id, value: habit.value }} />
          ) : (
            <Button variant="success">✓</Button>
          )}
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary"
              id="dropdown-basic"
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setModalEditHabit(true)}>
                Edit
              </Dropdown.Item>
              <Dropdown.Item>View progress</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => handleDelete(habit.id)}>
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Stack>
        <FormModal
          show={modalEditHabit}
          onHide={() => setModalEditHabit(false)}
          modalTitle="Edit Habit"
          data={habit}
          api={updateHabit}
        />
      </div>
      <div className="col-10 mb-1 small">{`0/${habit.value}`}</div>
    </ListGroupItem>
  );
}
