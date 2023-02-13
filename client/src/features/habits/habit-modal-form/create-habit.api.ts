import { baseServerURL } from '@utils/base-server-url';
import Cookies from 'universal-cookie';

interface createHabitInput {
  name: string;
  unit: string;
  value: number;
  recurrence: {
    type: string;
    option: number[];
  };
}

export async function createHabit(props: createHabitInput) {
  try {
    const cookies = new Cookies();

    const newHabit = {
      name: props.name,
      unit: props.unit,
      value: props.value,
      recurrence: {
        type: props.recurrence.type,
        option: props.recurrence.option,
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
