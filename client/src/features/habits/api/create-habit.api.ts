import { baseServerURL } from '@features/habits/utils/base-server-url';
import Cookies from 'universal-cookie';
import { Habit } from '../types/habit.type';

export async function createHabit(
  input: Omit<Habit, 'id' | 'createdAt' | 'updatedAt'>
) {
  try {
    const cookies = new Cookies();

    const newHabit = {
      name: input.name,
      unit: input.unit,
      value: input.value,
      recurrence: {
        type: input.recurrence.type,
        option: input.recurrence.option,
      },
    };

    const { data } = await baseServerURL.post('/habit/create', newHabit, {
      headers: {
        'x-refresh': cookies.get('refresh-token'),
        authorization: `Bearer ${cookies.get('access-token')}`,
      },
    });
    return data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}
