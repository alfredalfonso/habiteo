import { useState } from 'react';
import { getDateToday } from '@utils/get-date-today';
import { useQuery } from 'react-query';
import { getHabits } from './get-habit.api';
import { HBTHabitList } from './habit-list.component';
import { HBTHabitHeader } from './habit-header.component';
import { Habit } from '../habit.type';

export function HBTHabitMain() {
  const [inputDate, setInputDate] = useState(getDateToday);
  const { data } = useQuery<Habit[]>(['habits', inputDate], () =>
    getHabits(inputDate)
  );

  const [modalHabitForm, setModalHabitForm] = useState(false);

  let habitList: Habit[] = [];

  if (data) {
    data.map((habit) => {
      habitList.push({
        id: habit.id,
        name: habit.name,
        unit: habit.unit,
        value: habit.value,
        recurrence: {
          option: habit.recurrence.option,
          type: habit.recurrence.type,
        },
        createdAt: habit.createdAt,
        updatedAt: habit.updatedAt,
      });
    });
  }

  return (
    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
      <HBTHabitHeader
        inputDate={inputDate}
        setInputDate={setInputDate}
        setModalHabitForm={setModalHabitForm}
      />
      <hr />
      {data?.length != 0 ? (
        <HBTHabitList
          habits={habitList}
          setModalHabitForm={setModalHabitForm}
        />
      ) : (
        <h2 className="text-muted">No habits there</h2>
      )}
    </div>
  );
}
