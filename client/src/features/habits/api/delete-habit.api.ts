import { baseServerURL } from '@features/habits/utils/base-server-url';
import Cookies from 'universal-cookie';

export async function deleteHabit(inputId: number | undefined) {
  const cookies = new Cookies();

  return await baseServerURL
    .delete(`/habit/delete/${inputId}`, {
      headers: {
        'x-refresh': cookies.get('refresh-token'),
        authorization: `Bearer ${cookies.get('access-token')}`,
      },
    })
    .then((res) => res.data);
}
