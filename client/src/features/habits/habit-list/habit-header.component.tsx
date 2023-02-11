import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { MyVerticallyCenteredModal } from '../habit-modal-form/habit-modal.component';

interface Props {
  inputDate: string;
  setInputDate: (arg0: string) => void;
}

export function HBTHabitHeader({ inputDate, setInputDate }: Props) {
  const [modalCreateHabit, setModalCreateHabit] = useState(false);

  return (
    <div className="habit-header">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none">
          All Habit
        </h3>
        <Stack direction="horizontal" gap={3}>
          <input
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
          />
          <Button onClick={() => setModalCreateHabit(true)}>
            Create Habit
          </Button>
          <MyVerticallyCenteredModal
            show={modalCreateHabit}
            onHide={() => setModalCreateHabit(false)}
          />
        </Stack>
      </div>
    </div>
  );
}
