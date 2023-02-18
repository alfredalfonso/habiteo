import { useState } from 'react';
import { getDateToday } from '@features/habits/utils/get-date-today';
import { useQuery } from 'react-query';
import { getHabits } from '../api/get-habit.api';
import { HBTHabitList } from './habit-list.component';
import { HBTHabitHeader } from './habit-header.component';
import { Habit } from '../types/habit.type';
import { getHabitLogs } from '@features/habit-log/api/get-habit-log.api';
import { HabitLog } from '@features/habit-log';

export function HBTHabitMain() {
  const [inputDate, setInputDate] = useState(getDateToday);
  const habitQuery = useQuery<Habit[]>(['habits', inputDate], () =>
    getHabits(inputDate)
  );
  const habitLogsQuery = useQuery<HabitLog[]>(['habit-logs', inputDate], () =>
    getHabitLogs(inputDate)
  );

  const [modalHabitForm, setModalHabitForm] = useState(false);

  let habitList: Habit[] = [];
  let habitLogs: HabitLog[] = [];

  if (habitQuery.data) {
    habitQuery.data.map((habit) => {
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

  if (habitLogsQuery.data) {
    habitLogsQuery.data.map((logs) => {
      habitLogs.push({
        id: logs.id,
        habitId: logs.habitId,
        value: logs.value,
        createdAt: logs.createdAt,
        updatedAt: logs.updatedAt,
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
      {habitList.length != 0 ? (
        <HBTHabitList
          habits={habitList}
          setModalHabitForm={setModalHabitForm}
          habitLogs={habitLogs}
        />
      ) : (
        <h2 className="text-muted">No habits there</h2>
      )}
    </div>
  );
}
