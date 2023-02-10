import { useState } from 'react';
import { Button, Container, Stack } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { getDateToday } from '../../util/dateToday';
import { getHabits } from './api';
import { HBTHabitList } from './HBTHabitList';

interface HabitProps {
  id: number;
  userId: number;
  name: string;
  unit: string;
  value: number;
  recurrence: {
    option: number[];
    type: string;
  };
  createdAt: string;
  updatedAt: string;
}

export function UserHome() {
  const [inputDate, setInputDate] = useState(getDateToday);
  const { data } = useQuery<HabitProps[]>(['habits', inputDate], () =>
    getHabits(inputDate)
  );

  const habits: { id: number; name: string; type: string }[] = [];

  if (data) {
    data.map((habit) => {
      habits.push({
        id: habit.id,
        name: habit.name,
        type: habit.recurrence.type,
      });
    });
  }

  return (
    <Container>
      <div
        className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white"
        style={{ width: 500 }}
      >
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none">
            All Habits
          </h3>
          <Stack direction="horizontal" gap={3}>
            <input
              type="date"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
            />
            <Button>Create Habit</Button>
          </Stack>
        </div>
        <hr />
        {data?.length != 0 ? (
          <HBTHabitList habits={habits} />
        ) : (
          <h2>No habits there</h2>
        )}
      </div>
    </Container>
  );
}
