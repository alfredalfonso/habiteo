import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { MyVerticallyCenteredModal } from '../habit-modal-form/habit-modal.component';

interface Props {
  inputDate: string;
  setInputDate: (arg0: string) => void;
  setModalHabitForm: (arg0: boolean) => void;
}

export function HBTHabitHeader({
  inputDate,
  setInputDate,
  setModalHabitForm,
}: Props) {
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
          <Button onClick={() => setModalHabitForm(true)}>+</Button>
          {/* <MyVerticallyCenteredModal
            show={modalCreateHabit}
            onHide={() => setModalCreateHabit(false)}
          /> */}
        </Stack>
      </div>
    </div>
  );
}
