import ListGroupItem from 'react-bootstrap/ListGroupItem';

interface HabitPropsMin {
  name: string;
  type: string;
}

export function HBTHabitItem(props: HabitPropsMin) {
  return (
    <ListGroupItem action={true} className="py-3 lh-sm">
      <div className="d-flex w-100 align-items-center justify-content-between">
        <strong className="mb-1">{props.name}</strong>
        <small className="text-muted">{props.type}</small>
      </div>
      <div className="col-10 mb-1 small">
        Some placeholder content in a paragraph below the heading and date.
      </div>
    </ListGroupItem>
  );
}
