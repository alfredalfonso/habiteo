import ListGroup from 'react-bootstrap/ListGroup';
import { HBTHabitItem } from './habit-item.component';

// interface HabitProps {
//   id: number;
//   userId: number;
//   name: string;
//   unit: string;
//   value: number;
//   recurrence: {
//     option: number[];
//     type: string;
//   };
//   createdAt: string;
//   updatedAt: string;
// }

interface HabitPropsMin {
  name: string;
  type: string;
}

export function HBTHabitList({ habits }: { habits: HabitPropsMin[] }) {
  return (
    <ListGroup>
      {habits.map((habit: any) => (
        <HBTHabitItem key={habit.id} name={habit.name} type={habit.type} />
      ))}
    </ListGroup>
  );
}
