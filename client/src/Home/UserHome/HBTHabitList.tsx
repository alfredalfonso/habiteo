import ListGroup from 'react-bootstrap/ListGroup';

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

export function HBTHabitItem(props: HabitPropsMin) {
  return (
    <ListGroup.Item action={true} className="py-3 lh-sm">
      <div className="d-flex w-100 align-items-center justify-content-between">
        <strong className="mb-1">{props.name}</strong>
        <small className="text-muted">{props.type}</small>
      </div>
      <div className="col-10 mb-1 small">
        Some placeholder content in a paragraph below the heading and date.
      </div>
    </ListGroup.Item>
  );
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
