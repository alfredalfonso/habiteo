import { baseServerURL } from '@utils/base-server-url';
import Cookies from 'universal-cookie';

export async function getHabits(inputDate: string) {
  const cookies = new Cookies();

  return await baseServerURL
    .get(`/habit/get/${inputDate}`, {
      headers: {
        'x-refresh': cookies.get('refresh-token'),
        authorization: `Bearer ${cookies.get('access-token')}`,
      },
    })
    .then((res) => res.data);
}
