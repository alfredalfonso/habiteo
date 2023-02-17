import { baseServerURL } from '@features/habits/utils/base-server-url';
import Cookies from 'universal-cookie';
import { UpdateHabitInput } from '../types/habit.type';

export async function updateHabit(input: UpdateHabitInput) {
  const cookies = new Cookies();

  const updateHabit = {
    name: input.name,
    unit: input.unit,
    value: input.value,
    recurrence: {
      type: input.recurrence.type,
      option: input.recurrence.option,
    },
  };

  const { data } = await baseServerURL.post(
    `/habit/update/${input.id}`,
    updateHabit,
    {
      headers: {
        'x-refresh': cookies.get('refresh-token'),
        authorization: `Bearer ${cookies.get('access-token')}`,
      },
    }
  );
  return data;
}
