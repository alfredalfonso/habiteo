import ListGroup from 'react-bootstrap/ListGroup';
import { Habit } from '../habit.type';
import { HBTHabitItem } from './habit-item.component';

type Props = {
  habits: Habit[];
  setModalHabitForm: (args0: boolean) => void;
};

export function HBTHabitList({ habits, setModalHabitForm }: Props) {
  return (
    <ListGroup>
      {habits.map((habit: any) => (
        <HBTHabitItem key={habit.id} habit={habit} />
      ))}
    </ListGroup>
  );
}
