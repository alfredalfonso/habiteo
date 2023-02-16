import { useState } from 'react';
import { Button, Dropdown, DropdownButton, Stack } from 'react-bootstrap';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { BsCheckLg } from 'react-icons/bs';
import { FormModal } from '../habit-modal-form/habit-modal.component';
import { Habit } from '../habit.type';

type Props = {
  habit: Habit;
};

export function HBTHabitItem({ habit }: Props) {
  const [isDone, setIsDone] = useState(false);
  const [modalEditHabit, setModalEditHabit] = useState(false);

  return (
    <ListGroupItem className="py-3 lh-sm">
      <div className="d-flex w-100 align-items-center justify-content-between">
        <strong className="mb-1">{habit.name}</strong>
        <Stack direction="horizontal" gap={2}>
          {!isDone ? (
            habit.value > 1 ? (
              <Button variant="secondary">+1</Button>
            ) : (
              <Button variant="secondary" onClick={() => setIsDone(true)}>
                Done
              </Button>
            )
          ) : (
            <BsCheckLg color="green" />
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
              <Dropdown.Item>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Stack>
        <FormModal
          show={modalEditHabit}
          onHide={() => setModalEditHabit(false)}
          modalTitle="Edit Habit"
          data={habit}
        />
      </div>
      <div className="col-10 mb-1 small">{`0/${habit.value}`}</div>
    </ListGroupItem>
  );
}
