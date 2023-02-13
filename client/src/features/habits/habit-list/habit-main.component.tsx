import { useState } from 'react';
import { getDateToday } from '@utils/get-date-today';
import { useQuery } from 'react-query';
import { getHabits } from './get-habit.api';
import { HBTHabitList } from './habit-list.component';
import { HBTHabitHeader } from './habit-header.component';

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

export function HBTHabitMain() {
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
    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
      <HBTHabitHeader inputDate={inputDate} setInputDate={setInputDate} />
      <hr />
      {data?.length != 0 ? (
        <HBTHabitList habits={habits} />
      ) : (
        <h2 className="text-muted">No habits there</h2>
      )}
    </div>
  );
}
