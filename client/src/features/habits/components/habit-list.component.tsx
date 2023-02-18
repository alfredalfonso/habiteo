import ListGroup from 'react-bootstrap/ListGroup';
import { Habit } from '../types/habit.type';
import { HBTHabitItem } from './habit-item.component';
import { HabitLog } from '@features/habit-log';

type Props = {
  habits: Habit[] | undefined;
  setModalHabitForm: (args0: boolean) => void;
  habitLogs: HabitLog[] | undefined;
};

export function HBTHabitList({ habits, setModalHabitForm, habitLogs }: Props) {
  if (habitLogs != undefined && habits != undefined) {
    return (
      <ListGroup>
        {habits.map((habit: Habit, index) => (
          <HBTHabitItem key={habit.id} habit={habit} isDone={false} />
        ))}
      </ListGroup>
    );
  } else {
    return <h1>...</h1>;
  }
}
