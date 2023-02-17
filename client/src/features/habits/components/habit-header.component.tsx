import { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { createHabit } from '../api/create-habit.api';
import { FormModal } from './habit-modal.component';

interface Props {
  inputDate: string;
  setInputDate: (arg0: string) => void;
  setModalHabitForm: (arg0: boolean) => void;
}

export function HBTHabitHeader({ inputDate, setInputDate }: Props) {
  const [modalCreateHabit, setModalCreateHabit] = useState(false);

  return (
    <div className="habit-header">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="d-flex align-items-center flex-shrink-0 link-dark text-decoration-none">
          All Habit
        </h3>
        <Stack direction="horizontal" gap={2}>
          <FormControl
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
          />
          <Button onClick={() => setModalCreateHabit(true)}>+</Button>
          <FormModal
            show={modalCreateHabit}
            onHide={() => setModalCreateHabit(false)}
            modalTitle="New Habit"
            api={createHabit}
          />
        </Stack>
      </div>
    </div>
  );
}
