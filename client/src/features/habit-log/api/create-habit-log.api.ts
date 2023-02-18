import { baseServerURL } from '@features/habits/utils/base-server-url';
import Cookies from 'universal-cookie';
import { HabitLog } from '../types/habit-log.type';

export async function createHabitLog(
  input: Omit<HabitLog, 'id' | 'createdAt' | 'updatedAt'>
) {
  try {
    const cookies = new Cookies();

    const newHabitLog: Omit<HabitLog, 'id' | 'createdAt' | 'updatedAt'> = {
      habitId: input.habitId,
      value: input.value,
    };

    const { data } = await baseServerURL.post('/log/create', newHabitLog, {
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
